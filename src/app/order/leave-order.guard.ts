import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { OrderComponent } from "./order.component";


@Injectable()
export class LeaveorderGuard implements CanDeactivate<OrderComponent> {

  canDeactivate(orderComponent: OrderComponent, 
                activatedRoute: ActivatedRouteSnapshot, 
                routerState: RouterStateSnapshot): boolean {
    if(!orderComponent.isOrderCompleted()) {
      return window.confirm('Deseja desistir da compra?')
    } else {
      return true
    }
  }

}