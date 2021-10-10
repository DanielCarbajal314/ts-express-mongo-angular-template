import { Component, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
    template: ''
})
export class BaseComponent implements OnDestroy {

    private subscriptions: Subscription[] = [];

    ngOnDestroy(): void {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

    protected unsubscribeOnDestroy(subscription: Subscription) {
        this.subscriptions.push(subscription);
    }

}
  