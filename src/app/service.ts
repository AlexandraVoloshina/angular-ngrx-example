import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "any",
})

export class MyService {
    constructor(private http: HttpClient) {}

    getSomeStuff() {
        return this.http.get("https://jsonplaceholder.typicode.com/todos/1");
    }
}