import { Injectable } from '@angular/core';
//import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { HttpClient, HttpResponse, HttpHeaders }		from "@angular/common/http";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

//---------------

export class API {
	constructor(readonly name: string, readonly endpoint: string){}

	static readonly JohnnyYuge: API = new API("Johnny Yuge serv", "http://johnnyyuge.eu/");
	static readonly EMPTY: API = new API("Empty", "");
}

//---------------

@Injectable()
export class RequestService {

  private local: boolean = true;
	private _api: API = null;
	private headers: HttpHeaders;

  constructor(
		private http: HttpClient) {
		this.headers = new HttpHeaders({
			"Accept": "application/json",
			"Content-type": "application/x-www-form-urlencoded"
		});
  }

	get api(): API {
		if(this._api) return this._api;

		if(this.local) {
			this._api = API.EMPTY;
		} else {
			this._api = API.JohnnyYuge;
		}
		return this._api;
	}

	get(route: string, data?: string);
	get(route: string, data?: any);
	get(route: string, data?: any) : any {
		return this.http.get( this.api.endpoint + route + (data?RequestService.JSONToURLParams(data):"") )
				.map((res: Response) => {	return this.extractData(res); })
				.catch((error: any) => {	return this.handleError(error); });
	}

	post(route: string, params: any = {}) : any {
		let p = new FormData();

		for(let key in params) {
			p.append(key, params[key]);
		}

		console.log("Get", this.api.endpoint + route, p);
		return this.http.post(this.api.endpoint + route, p )
				.map((res: Response) => {	return this.extractData(res); })
				.catch((error: any) => {	return this.handleError(error); });
	}

	put(route: string, params: any = {}) : any {
		console.log("In put", params);
		return this.http.put(this.api.endpoint + route, params )
			.map((res: Response) => {	return this.extractData(res); })
			.catch((error: any) => {	return this.handleError(error); });
	}


  private extractData(res: Response) {
		console.log( res );
		return res;
  }

	private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
			if(error.status == 500) {
				console.error("Bug in the endpoint", error.url);
			} else if (error.status == 404) {
				console.error("Not found", error.url);
			} else if(error.status == 405) {
        console.error("No rights", error.url);
			} else {
				const body = JSON.parse(error.statusText) || {};
				const err = error || JSON.stringify(body);
				errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
				console.error(errMsg);
			}
    } else {
      errMsg = error.message ? error.message : error.toString();
			console.error(errMsg);
    }

    return Observable.throw(error);
  }

	static JSONToURLParams( data: any ) : string {
    if(!data) return "";
		let params = new URLSearchParams();
		for(let key in data)  params.set(key, data[key]);
		return params.toString() != "" ? "?"+params.toString():"";
	}

	static parameterSerializer(params: any = {}) : FormData {
		var hp = new FormData();
		for(let key in params) hp.append(key, params[key]);
		return hp;
	}
}
