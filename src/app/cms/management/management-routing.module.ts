import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'settings' },
  { path: 'regions', loadChildren: () => import('./management-region/management-region.module').then(x => x.ManagementRegionModule) },
  { path: 'services', loadChildren: () => import('./management-services/management-services.module').then(x => x.ManagementServicesModule) },
  { path: 'review-parameters', loadChildren: () => import('./management-review-parameters/management-review-parameters.module').then(x => x.ManagementReviewParametersModule) },
  { path: 'fleets', loadChildren: () => import('./management-fleets/management-fleets.module').then(x => x.ManagementFleetsModule) },
  { path: 'cars', loadChildren: () => import('./management-cars/management-cars.module').then(x => x.ManagementCarsModule) },
  { path: 'payment-gateways', loadChildren: () => import('./management-payment-gateways/management-payment-gateways.module').then(x => x.ManagementPaymentGatewaysModule) },
  { path: 'users', loadChildren: () => import('./management-users/management-users.module').then(x => x.ManagementUsersModule) },
  { path: 'user-roles', loadChildren: () => import('./management-roles/management-roles.module').then(x => x.ManagementRolesModule) },
  { path: 'settings', loadChildren: () => import('./management-settings/management-settings.module').then(x => x.ManagementSettingsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
