import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map } from "rxjs";
import { MyService } from "../service";
import { ExampleActions } from "./example.actions";

@Injectable()
export class ExampleEffects {
    loadData$ = createEffect(() => 
        this.actions$.pipe(
            ofType(ExampleActions.getData),
            mergeMap(() => 
                this.myService.getSomeStuff().pipe(
                    map((data) => {
                        return ExampleActions.getDataSuccess({ data: data });
                    })
                )
            )
        )
    );

    constructor(private actions$: Actions, private myService: MyService) {}

    
}