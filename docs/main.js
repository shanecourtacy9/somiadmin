"use strict";
(self["webpackChunkadmin_panel"] = self["webpackChunkadmin_panel"] || []).push([["main"],{

/***/ 44362:
/*!******************************!*\
  !*** ./generated/graphql.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressSortFields": () => (/* binding */ AddressSortFields),
/* harmony export */   "AnnouncementSortFields": () => (/* binding */ AnnouncementSortFields),
/* harmony export */   "AnnouncementsListDocument": () => (/* binding */ AnnouncementsListDocument),
/* harmony export */   "AnnouncementsListGQL": () => (/* binding */ AnnouncementsListGQL),
/* harmony export */   "AssignDriverToOrderDocument": () => (/* binding */ AssignDriverToOrderDocument),
/* harmony export */   "AssignDriverToOrderGQL": () => (/* binding */ AssignDriverToOrderGQL),
/* harmony export */   "AvailableDriversForOrderDocument": () => (/* binding */ AvailableDriversForOrderDocument),
/* harmony export */   "AvailableDriversForOrderGQL": () => (/* binding */ AvailableDriversForOrderGQL),
/* harmony export */   "CalculateFareError": () => (/* binding */ CalculateFareError),
/* harmony export */   "CancelOrderDocument": () => (/* binding */ CancelOrderDocument),
/* harmony export */   "CancelOrderGQL": () => (/* binding */ CancelOrderGQL),
/* harmony export */   "CarColorSortFields": () => (/* binding */ CarColorSortFields),
/* harmony export */   "CarModelSortFields": () => (/* binding */ CarModelSortFields),
/* harmony export */   "CarsListDocument": () => (/* binding */ CarsListDocument),
/* harmony export */   "CarsListGQL": () => (/* binding */ CarsListGQL),
/* harmony export */   "ChartTimeframe": () => (/* binding */ ChartTimeframe),
/* harmony export */   "ComplaintActivitySortFields": () => (/* binding */ ComplaintActivitySortFields),
/* harmony export */   "ComplaintActivityType": () => (/* binding */ ComplaintActivityType),
/* harmony export */   "ComplaintSortFields": () => (/* binding */ ComplaintSortFields),
/* harmony export */   "ComplaintStatus": () => (/* binding */ ComplaintStatus),
/* harmony export */   "ComplaintsListDocument": () => (/* binding */ ComplaintsListDocument),
/* harmony export */   "ComplaintsListGQL": () => (/* binding */ ComplaintsListGQL),
/* harmony export */   "CouponListDocument": () => (/* binding */ CouponListDocument),
/* harmony export */   "CouponListGQL": () => (/* binding */ CouponListGQL),
/* harmony export */   "CouponSortFields": () => (/* binding */ CouponSortFields),
/* harmony export */   "CreateAnnouncementDocument": () => (/* binding */ CreateAnnouncementDocument),
/* harmony export */   "CreateAnnouncementGQL": () => (/* binding */ CreateAnnouncementGQL),
/* harmony export */   "CreateCarColorDocument": () => (/* binding */ CreateCarColorDocument),
/* harmony export */   "CreateCarColorGQL": () => (/* binding */ CreateCarColorGQL),
/* harmony export */   "CreateCarModelDocument": () => (/* binding */ CreateCarModelDocument),
/* harmony export */   "CreateCarModelGQL": () => (/* binding */ CreateCarModelGQL),
/* harmony export */   "CreateCouponDocument": () => (/* binding */ CreateCouponDocument),
/* harmony export */   "CreateCouponGQL": () => (/* binding */ CreateCouponGQL),
/* harmony export */   "CreateDriverDocument": () => (/* binding */ CreateDriverDocument),
/* harmony export */   "CreateDriverGQL": () => (/* binding */ CreateDriverGQL),
/* harmony export */   "CreateDriverTransactionDocument": () => (/* binding */ CreateDriverTransactionDocument),
/* harmony export */   "CreateDriverTransactionGQL": () => (/* binding */ CreateDriverTransactionGQL),
/* harmony export */   "CreateFleetDocument": () => (/* binding */ CreateFleetDocument),
/* harmony export */   "CreateFleetGQL": () => (/* binding */ CreateFleetGQL),
/* harmony export */   "CreateFleetTransactionDocument": () => (/* binding */ CreateFleetTransactionDocument),
/* harmony export */   "CreateFleetTransactionGQL": () => (/* binding */ CreateFleetTransactionGQL),
/* harmony export */   "CreateOperatorDocument": () => (/* binding */ CreateOperatorDocument),
/* harmony export */   "CreateOperatorGQL": () => (/* binding */ CreateOperatorGQL),
/* harmony export */   "CreateOrderDocument": () => (/* binding */ CreateOrderDocument),
/* harmony export */   "CreateOrderGQL": () => (/* binding */ CreateOrderGQL),
/* harmony export */   "CreatePaymentGatewayDocument": () => (/* binding */ CreatePaymentGatewayDocument),
/* harmony export */   "CreatePaymentGatewayGQL": () => (/* binding */ CreatePaymentGatewayGQL),
/* harmony export */   "CreateRegionDocument": () => (/* binding */ CreateRegionDocument),
/* harmony export */   "CreateRegionGQL": () => (/* binding */ CreateRegionGQL),
/* harmony export */   "CreateReviewParameterDocument": () => (/* binding */ CreateReviewParameterDocument),
/* harmony export */   "CreateReviewParameterGQL": () => (/* binding */ CreateReviewParameterGQL),
/* harmony export */   "CreateRiderDocument": () => (/* binding */ CreateRiderDocument),
/* harmony export */   "CreateRiderGQL": () => (/* binding */ CreateRiderGQL),
/* harmony export */   "CreateRiderTransactionDocument": () => (/* binding */ CreateRiderTransactionDocument),
/* harmony export */   "CreateRiderTransactionGQL": () => (/* binding */ CreateRiderTransactionGQL),
/* harmony export */   "CreateRoleDocument": () => (/* binding */ CreateRoleDocument),
/* harmony export */   "CreateRoleGQL": () => (/* binding */ CreateRoleGQL),
/* harmony export */   "CreateServiceCategoryDocument": () => (/* binding */ CreateServiceCategoryDocument),
/* harmony export */   "CreateServiceCategoryGQL": () => (/* binding */ CreateServiceCategoryGQL),
/* harmony export */   "CreateServiceDocument": () => (/* binding */ CreateServiceDocument),
/* harmony export */   "CreateServiceGQL": () => (/* binding */ CreateServiceGQL),
/* harmony export */   "CurrentConfigurationDocument": () => (/* binding */ CurrentConfigurationDocument),
/* harmony export */   "CurrentConfigurationGQL": () => (/* binding */ CurrentConfigurationGQL),
/* harmony export */   "DeleteCarColorDocument": () => (/* binding */ DeleteCarColorDocument),
/* harmony export */   "DeleteCarColorGQL": () => (/* binding */ DeleteCarColorGQL),
/* harmony export */   "DeleteCarModelDocument": () => (/* binding */ DeleteCarModelDocument),
/* harmony export */   "DeleteCarModelGQL": () => (/* binding */ DeleteCarModelGQL),
/* harmony export */   "DeleteServiceCategoryDocument": () => (/* binding */ DeleteServiceCategoryDocument),
/* harmony export */   "DeleteServiceCategoryGQL": () => (/* binding */ DeleteServiceCategoryGQL),
/* harmony export */   "DisableServerDocument": () => (/* binding */ DisableServerDocument),
/* harmony export */   "DisableServerGQL": () => (/* binding */ DisableServerGQL),
/* harmony export */   "DispatcherCalculateFareDocument": () => (/* binding */ DispatcherCalculateFareDocument),
/* harmony export */   "DispatcherCalculateFareGQL": () => (/* binding */ DispatcherCalculateFareGQL),
/* harmony export */   "DriverDeductTransactionType": () => (/* binding */ DriverDeductTransactionType),
/* harmony export */   "DriverFeedbacksDocument": () => (/* binding */ DriverFeedbacksDocument),
/* harmony export */   "DriverFeedbacksGQL": () => (/* binding */ DriverFeedbacksGQL),
/* harmony export */   "DriverFinancialsDocument": () => (/* binding */ DriverFinancialsDocument),
/* harmony export */   "DriverFinancialsGQL": () => (/* binding */ DriverFinancialsGQL),
/* harmony export */   "DriverLocationFragmentDoc": () => (/* binding */ DriverLocationFragmentDoc),
/* harmony export */   "DriverOrdersDocument": () => (/* binding */ DriverOrdersDocument),
/* harmony export */   "DriverOrdersGQL": () => (/* binding */ DriverOrdersGQL),
/* harmony export */   "DriverOverviewInfoFragmentDoc": () => (/* binding */ DriverOverviewInfoFragmentDoc),
/* harmony export */   "DriverRechargeTransactionType": () => (/* binding */ DriverRechargeTransactionType),
/* harmony export */   "DriverSearchDocument": () => (/* binding */ DriverSearchDocument),
/* harmony export */   "DriverSearchGQL": () => (/* binding */ DriverSearchGQL),
/* harmony export */   "DriverSortFields": () => (/* binding */ DriverSortFields),
/* harmony export */   "DriverStatus": () => (/* binding */ DriverStatus),
/* harmony export */   "DriverTransactionSortFields": () => (/* binding */ DriverTransactionSortFields),
/* harmony export */   "DriverWalletSortFields": () => (/* binding */ DriverWalletSortFields),
/* harmony export */   "DriverWalletsListDocument": () => (/* binding */ DriverWalletsListDocument),
/* harmony export */   "DriverWalletsListGQL": () => (/* binding */ DriverWalletsListGQL),
/* harmony export */   "DriversListDocument": () => (/* binding */ DriversListDocument),
/* harmony export */   "DriversListGQL": () => (/* binding */ DriversListGQL),
/* harmony export */   "ExportDocument": () => (/* binding */ ExportDocument),
/* harmony export */   "ExportGQL": () => (/* binding */ ExportGQL),
/* harmony export */   "ExportTable": () => (/* binding */ ExportTable),
/* harmony export */   "ExportType": () => (/* binding */ ExportType),
/* harmony export */   "FeedbackParameterSortFields": () => (/* binding */ FeedbackParameterSortFields),
/* harmony export */   "FeedbackSortFields": () => (/* binding */ FeedbackSortFields),
/* harmony export */   "FleetDriversDocument": () => (/* binding */ FleetDriversDocument),
/* harmony export */   "FleetDriversGQL": () => (/* binding */ FleetDriversGQL),
/* harmony export */   "FleetFinancialsDocument": () => (/* binding */ FleetFinancialsDocument),
/* harmony export */   "FleetFinancialsGQL": () => (/* binding */ FleetFinancialsGQL),
/* harmony export */   "FleetSortFields": () => (/* binding */ FleetSortFields),
/* harmony export */   "FleetTransactionSortFields": () => (/* binding */ FleetTransactionSortFields),
/* harmony export */   "FleetWalletSortFields": () => (/* binding */ FleetWalletSortFields),
/* harmony export */   "FleetWalletsListDocument": () => (/* binding */ FleetWalletsListDocument),
/* harmony export */   "FleetWalletsListGQL": () => (/* binding */ FleetWalletsListGQL),
/* harmony export */   "FleetsListDocument": () => (/* binding */ FleetsListDocument),
/* harmony export */   "FleetsListGQL": () => (/* binding */ FleetsListGQL),
/* harmony export */   "Gender": () => (/* binding */ Gender),
/* harmony export */   "IncomeChartDocument": () => (/* binding */ IncomeChartDocument),
/* harmony export */   "IncomeChartGQL": () => (/* binding */ IncomeChartGQL),
/* harmony export */   "LoginDocument": () => (/* binding */ LoginDocument),
/* harmony export */   "LoginGQL": () => (/* binding */ LoginGQL),
/* harmony export */   "MediaSortFields": () => (/* binding */ MediaSortFields),
/* harmony export */   "MessageStatus": () => (/* binding */ MessageStatus),
/* harmony export */   "NewOperatorDocument": () => (/* binding */ NewOperatorDocument),
/* harmony export */   "NewOperatorGQL": () => (/* binding */ NewOperatorGQL),
/* harmony export */   "NewServiceDocument": () => (/* binding */ NewServiceDocument),
/* harmony export */   "NewServiceGQL": () => (/* binding */ NewServiceGQL),
/* harmony export */   "OperatorPermission": () => (/* binding */ OperatorPermission),
/* harmony export */   "OperatorRoleSortFields": () => (/* binding */ OperatorRoleSortFields),
/* harmony export */   "OperatorSortFields": () => (/* binding */ OperatorSortFields),
/* harmony export */   "OrderMessageSortFields": () => (/* binding */ OrderMessageSortFields),
/* harmony export */   "OrderSortFields": () => (/* binding */ OrderSortFields),
/* harmony export */   "OrderStatus": () => (/* binding */ OrderStatus),
/* harmony export */   "OrderUpdatedDocument": () => (/* binding */ OrderUpdatedDocument),
/* harmony export */   "OrderUpdatedGQL": () => (/* binding */ OrderUpdatedGQL),
/* harmony export */   "OrdersListDocument": () => (/* binding */ OrdersListDocument),
/* harmony export */   "OrdersListGQL": () => (/* binding */ OrdersListGQL),
/* harmony export */   "OverviewDocument": () => (/* binding */ OverviewDocument),
/* harmony export */   "OverviewDriverPagingDocument": () => (/* binding */ OverviewDriverPagingDocument),
/* harmony export */   "OverviewDriverPagingGQL": () => (/* binding */ OverviewDriverPagingGQL),
/* harmony export */   "OverviewGQL": () => (/* binding */ OverviewGQL),
/* harmony export */   "PaymentGatewaySortFields": () => (/* binding */ PaymentGatewaySortFields),
/* harmony export */   "PaymentGatewayType": () => (/* binding */ PaymentGatewayType),
/* harmony export */   "PaymentGatewaysDocument": () => (/* binding */ PaymentGatewaysDocument),
/* harmony export */   "PaymentGatewaysGQL": () => (/* binding */ PaymentGatewaysGQL),
/* harmony export */   "ProviderDeductTransactionType": () => (/* binding */ ProviderDeductTransactionType),
/* harmony export */   "ProviderRechargeTransactionType": () => (/* binding */ ProviderRechargeTransactionType),
/* harmony export */   "ProviderTransactionSortFields": () => (/* binding */ ProviderTransactionSortFields),
/* harmony export */   "ProviderWalletSortFields": () => (/* binding */ ProviderWalletSortFields),
/* harmony export */   "ProviderWalletsListDocument": () => (/* binding */ ProviderWalletsListDocument),
/* harmony export */   "ProviderWalletsListGQL": () => (/* binding */ ProviderWalletsListGQL),
/* harmony export */   "RegionListDocument": () => (/* binding */ RegionListDocument),
/* harmony export */   "RegionListGQL": () => (/* binding */ RegionListGQL),
/* harmony export */   "RegionSortFields": () => (/* binding */ RegionSortFields),
/* harmony export */   "RegionViewDocument": () => (/* binding */ RegionViewDocument),
/* harmony export */   "RegionViewGQL": () => (/* binding */ RegionViewGQL),
/* harmony export */   "RequestActivitySortFields": () => (/* binding */ RequestActivitySortFields),
/* harmony export */   "RequestActivityType": () => (/* binding */ RequestActivityType),
/* harmony export */   "RequestsChartDocument": () => (/* binding */ RequestsChartDocument),
/* harmony export */   "RequestsChartGQL": () => (/* binding */ RequestsChartGQL),
/* harmony export */   "ReviewParameterViewDocument": () => (/* binding */ ReviewParameterViewDocument),
/* harmony export */   "ReviewParameterViewGQL": () => (/* binding */ ReviewParameterViewGQL),
/* harmony export */   "ReviewParametersListDocument": () => (/* binding */ ReviewParametersListDocument),
/* harmony export */   "ReviewParametersListGQL": () => (/* binding */ ReviewParametersListGQL),
/* harmony export */   "RiderAddressSortFields": () => (/* binding */ RiderAddressSortFields),
/* harmony export */   "RiderAddressType": () => (/* binding */ RiderAddressType),
/* harmony export */   "RiderAddressesDocument": () => (/* binding */ RiderAddressesDocument),
/* harmony export */   "RiderAddressesGQL": () => (/* binding */ RiderAddressesGQL),
/* harmony export */   "RiderDeductTransactionType": () => (/* binding */ RiderDeductTransactionType),
/* harmony export */   "RiderOrdersDocument": () => (/* binding */ RiderOrdersDocument),
/* harmony export */   "RiderOrdersGQL": () => (/* binding */ RiderOrdersGQL),
/* harmony export */   "RiderRechargeTransactionType": () => (/* binding */ RiderRechargeTransactionType),
/* harmony export */   "RiderSortFields": () => (/* binding */ RiderSortFields),
/* harmony export */   "RiderStatus": () => (/* binding */ RiderStatus),
/* harmony export */   "RiderTransactionSortFields": () => (/* binding */ RiderTransactionSortFields),
/* harmony export */   "RiderWalletDocument": () => (/* binding */ RiderWalletDocument),
/* harmony export */   "RiderWalletGQL": () => (/* binding */ RiderWalletGQL),
/* harmony export */   "RiderWalletSortFields": () => (/* binding */ RiderWalletSortFields),
/* harmony export */   "RiderWalletsListDocument": () => (/* binding */ RiderWalletsListDocument),
/* harmony export */   "RiderWalletsListGQL": () => (/* binding */ RiderWalletsListGQL),
/* harmony export */   "RidersListDocument": () => (/* binding */ RidersListDocument),
/* harmony export */   "RidersListGQL": () => (/* binding */ RidersListGQL),
/* harmony export */   "RoleDocument": () => (/* binding */ RoleDocument),
/* harmony export */   "RoleGQL": () => (/* binding */ RoleGQL),
/* harmony export */   "RolesDocument": () => (/* binding */ RolesDocument),
/* harmony export */   "RolesGQL": () => (/* binding */ RolesGQL),
/* harmony export */   "ServiceCategorySortFields": () => (/* binding */ ServiceCategorySortFields),
/* harmony export */   "ServiceOptionIcon": () => (/* binding */ ServiceOptionIcon),
/* harmony export */   "ServiceOptionType": () => (/* binding */ ServiceOptionType),
/* harmony export */   "ServicePaymentMethod": () => (/* binding */ ServicePaymentMethod),
/* harmony export */   "ServiceSortFields": () => (/* binding */ ServiceSortFields),
/* harmony export */   "ServicesListDocument": () => (/* binding */ ServicesListDocument),
/* harmony export */   "ServicesListGQL": () => (/* binding */ ServicesListGQL),
/* harmony export */   "SetRegionsOnServiceDocument": () => (/* binding */ SetRegionsOnServiceDocument),
/* harmony export */   "SetRegionsOnServiceGQL": () => (/* binding */ SetRegionsOnServiceGQL),
/* harmony export */   "SortDirection": () => (/* binding */ SortDirection),
/* harmony export */   "SortNulls": () => (/* binding */ SortNulls),
/* harmony export */   "TransactionAction": () => (/* binding */ TransactionAction),
/* harmony export */   "TransactionStatus": () => (/* binding */ TransactionStatus),
/* harmony export */   "UpdateAnnouncementDocument": () => (/* binding */ UpdateAnnouncementDocument),
/* harmony export */   "UpdateAnnouncementGQL": () => (/* binding */ UpdateAnnouncementGQL),
/* harmony export */   "UpdateCarColorDocument": () => (/* binding */ UpdateCarColorDocument),
/* harmony export */   "UpdateCarColorGQL": () => (/* binding */ UpdateCarColorGQL),
/* harmony export */   "UpdateCarModelDocument": () => (/* binding */ UpdateCarModelDocument),
/* harmony export */   "UpdateCarModelGQL": () => (/* binding */ UpdateCarModelGQL),
/* harmony export */   "UpdateComplaintStatusDocument": () => (/* binding */ UpdateComplaintStatusDocument),
/* harmony export */   "UpdateComplaintStatusGQL": () => (/* binding */ UpdateComplaintStatusGQL),
/* harmony export */   "UpdateConfigStatus": () => (/* binding */ UpdateConfigStatus),
/* harmony export */   "UpdateCouponDocument": () => (/* binding */ UpdateCouponDocument),
/* harmony export */   "UpdateCouponGQL": () => (/* binding */ UpdateCouponGQL),
/* harmony export */   "UpdateDriverProfileDocument": () => (/* binding */ UpdateDriverProfileDocument),
/* harmony export */   "UpdateDriverProfileGQL": () => (/* binding */ UpdateDriverProfileGQL),
/* harmony export */   "UpdateDriverStatusDocument": () => (/* binding */ UpdateDriverStatusDocument),
/* harmony export */   "UpdateDriverStatusGQL": () => (/* binding */ UpdateDriverStatusGQL),
/* harmony export */   "UpdateFirebaseDocument": () => (/* binding */ UpdateFirebaseDocument),
/* harmony export */   "UpdateFirebaseGQL": () => (/* binding */ UpdateFirebaseGQL),
/* harmony export */   "UpdateFleetDocument": () => (/* binding */ UpdateFleetDocument),
/* harmony export */   "UpdateFleetGQL": () => (/* binding */ UpdateFleetGQL),
/* harmony export */   "UpdateMapsApiKeyDocument": () => (/* binding */ UpdateMapsApiKeyDocument),
/* harmony export */   "UpdateMapsApiKeyGQL": () => (/* binding */ UpdateMapsApiKeyGQL),
/* harmony export */   "UpdateOperatorDocument": () => (/* binding */ UpdateOperatorDocument),
/* harmony export */   "UpdateOperatorGQL": () => (/* binding */ UpdateOperatorGQL),
/* harmony export */   "UpdatePasswordDocument": () => (/* binding */ UpdatePasswordDocument),
/* harmony export */   "UpdatePasswordGQL": () => (/* binding */ UpdatePasswordGQL),
/* harmony export */   "UpdatePaymentGatewayDocument": () => (/* binding */ UpdatePaymentGatewayDocument),
/* harmony export */   "UpdatePaymentGatewayGQL": () => (/* binding */ UpdatePaymentGatewayGQL),
/* harmony export */   "UpdatePurchaseCodeDocument": () => (/* binding */ UpdatePurchaseCodeDocument),
/* harmony export */   "UpdatePurchaseCodeGQL": () => (/* binding */ UpdatePurchaseCodeGQL),
/* harmony export */   "UpdatePurchaseCodeStatus": () => (/* binding */ UpdatePurchaseCodeStatus),
/* harmony export */   "UpdateRegionDocument": () => (/* binding */ UpdateRegionDocument),
/* harmony export */   "UpdateRegionGQL": () => (/* binding */ UpdateRegionGQL),
/* harmony export */   "UpdateReviewParameterDocument": () => (/* binding */ UpdateReviewParameterDocument),
/* harmony export */   "UpdateReviewParameterGQL": () => (/* binding */ UpdateReviewParameterGQL),
/* harmony export */   "UpdateRiderDocument": () => (/* binding */ UpdateRiderDocument),
/* harmony export */   "UpdateRiderGQL": () => (/* binding */ UpdateRiderGQL),
/* harmony export */   "UpdateRoleDocument": () => (/* binding */ UpdateRoleDocument),
/* harmony export */   "UpdateRoleGQL": () => (/* binding */ UpdateRoleGQL),
/* harmony export */   "UpdateServiceCategoryDocument": () => (/* binding */ UpdateServiceCategoryDocument),
/* harmony export */   "UpdateServiceCategoryGQL": () => (/* binding */ UpdateServiceCategoryGQL),
/* harmony export */   "UpdateServiceDocument": () => (/* binding */ UpdateServiceDocument),
/* harmony export */   "UpdateServiceGQL": () => (/* binding */ UpdateServiceGQL),
/* harmony export */   "UsersListDocument": () => (/* binding */ UsersListDocument),
/* harmony export */   "UsersListGQL": () => (/* binding */ UsersListGQL),
/* harmony export */   "ViewAnnouncementDocument": () => (/* binding */ ViewAnnouncementDocument),
/* harmony export */   "ViewAnnouncementGQL": () => (/* binding */ ViewAnnouncementGQL),
/* harmony export */   "ViewComplaintDocument": () => (/* binding */ ViewComplaintDocument),
/* harmony export */   "ViewComplaintGQL": () => (/* binding */ ViewComplaintGQL),
/* harmony export */   "ViewCouponDocument": () => (/* binding */ ViewCouponDocument),
/* harmony export */   "ViewCouponGQL": () => (/* binding */ ViewCouponGQL),
/* harmony export */   "ViewDriverDocument": () => (/* binding */ ViewDriverDocument),
/* harmony export */   "ViewDriverGQL": () => (/* binding */ ViewDriverGQL),
/* harmony export */   "ViewFleetDocument": () => (/* binding */ ViewFleetDocument),
/* harmony export */   "ViewFleetGQL": () => (/* binding */ ViewFleetGQL),
/* harmony export */   "ViewOperatorDocument": () => (/* binding */ ViewOperatorDocument),
/* harmony export */   "ViewOperatorGQL": () => (/* binding */ ViewOperatorGQL),
/* harmony export */   "ViewOrderDocument": () => (/* binding */ ViewOrderDocument),
/* harmony export */   "ViewOrderGQL": () => (/* binding */ ViewOrderGQL),
/* harmony export */   "ViewPaymentGatewayDocument": () => (/* binding */ ViewPaymentGatewayDocument),
/* harmony export */   "ViewPaymentGatewayGQL": () => (/* binding */ ViewPaymentGatewayGQL),
/* harmony export */   "ViewRiderDocument": () => (/* binding */ ViewRiderDocument),
/* harmony export */   "ViewRiderGQL": () => (/* binding */ ViewRiderGQL),
/* harmony export */   "ViewServiceCategoryDocument": () => (/* binding */ ViewServiceCategoryDocument),
/* harmony export */   "ViewServiceCategoryGQL": () => (/* binding */ ViewServiceCategoryGQL),
/* harmony export */   "ViewServiceDocument": () => (/* binding */ ViewServiceDocument),
/* harmony export */   "ViewServiceGQL": () => (/* binding */ ViewServiceGQL)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 89858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




var AddressSortFields;
(function (AddressSortFields) {
    AddressSortFields["Id"] = "id";
})(AddressSortFields || (AddressSortFields = {}));
var AnnouncementSortFields;
(function (AnnouncementSortFields) {
    AnnouncementSortFields["Id"] = "id";
})(AnnouncementSortFields || (AnnouncementSortFields = {}));
var CalculateFareError;
(function (CalculateFareError) {
    CalculateFareError["NoServiceInRegion"] = "NoServiceInRegion";
    CalculateFareError["RegionUnsupported"] = "RegionUnsupported";
})(CalculateFareError || (CalculateFareError = {}));
var CarColorSortFields;
(function (CarColorSortFields) {
    CarColorSortFields["Id"] = "id";
})(CarColorSortFields || (CarColorSortFields = {}));
var CarModelSortFields;
(function (CarModelSortFields) {
    CarModelSortFields["Id"] = "id";
})(CarModelSortFields || (CarModelSortFields = {}));
var ChartTimeframe;
(function (ChartTimeframe) {
    ChartTimeframe["Daily"] = "Daily";
    ChartTimeframe["Monthly"] = "Monthly";
    ChartTimeframe["Weekly"] = "Weekly";
    ChartTimeframe["Yearly"] = "Yearly";
})(ChartTimeframe || (ChartTimeframe = {}));
var ComplaintActivitySortFields;
(function (ComplaintActivitySortFields) {
    ComplaintActivitySortFields["ComplaintId"] = "complaintId";
    ComplaintActivitySortFields["Id"] = "id";
})(ComplaintActivitySortFields || (ComplaintActivitySortFields = {}));
var ComplaintActivityType;
(function (ComplaintActivityType) {
    ComplaintActivityType["AssignToOperator"] = "AssignToOperator";
    ComplaintActivityType["Resolved"] = "Resolved";
    ComplaintActivityType["Update"] = "Update";
})(ComplaintActivityType || (ComplaintActivityType = {}));
var ComplaintSortFields;
(function (ComplaintSortFields) {
    ComplaintSortFields["Id"] = "id";
    ComplaintSortFields["RequestId"] = "requestId";
    ComplaintSortFields["Status"] = "status";
})(ComplaintSortFields || (ComplaintSortFields = {}));
var ComplaintStatus;
(function (ComplaintStatus) {
    ComplaintStatus["Resolved"] = "Resolved";
    ComplaintStatus["Submitted"] = "Submitted";
    ComplaintStatus["UnderInvestigation"] = "UnderInvestigation";
})(ComplaintStatus || (ComplaintStatus = {}));
var CouponSortFields;
(function (CouponSortFields) {
    CouponSortFields["Id"] = "id";
})(CouponSortFields || (CouponSortFields = {}));
var DriverDeductTransactionType;
(function (DriverDeductTransactionType) {
    DriverDeductTransactionType["Commission"] = "Commission";
    DriverDeductTransactionType["Correction"] = "Correction";
    DriverDeductTransactionType["Withdraw"] = "Withdraw";
})(DriverDeductTransactionType || (DriverDeductTransactionType = {}));
var DriverRechargeTransactionType;
(function (DriverRechargeTransactionType) {
    DriverRechargeTransactionType["BankTransfer"] = "BankTransfer";
    DriverRechargeTransactionType["Gift"] = "Gift";
    DriverRechargeTransactionType["InAppPayment"] = "InAppPayment";
    DriverRechargeTransactionType["OrderFee"] = "OrderFee";
})(DriverRechargeTransactionType || (DriverRechargeTransactionType = {}));
var DriverSortFields;
(function (DriverSortFields) {
    DriverSortFields["FleetId"] = "fleetId";
    DriverSortFields["Id"] = "id";
    DriverSortFields["LastName"] = "lastName";
    DriverSortFields["MobileNumber"] = "mobileNumber";
    DriverSortFields["Status"] = "status";
})(DriverSortFields || (DriverSortFields = {}));
var DriverStatus;
(function (DriverStatus) {
    DriverStatus["Blocked"] = "Blocked";
    DriverStatus["HardReject"] = "HardReject";
    DriverStatus["InService"] = "InService";
    DriverStatus["Offline"] = "Offline";
    DriverStatus["Online"] = "Online";
    DriverStatus["PendingApproval"] = "PendingApproval";
    DriverStatus["SoftReject"] = "SoftReject";
    DriverStatus["WaitingDocuments"] = "WaitingDocuments";
})(DriverStatus || (DriverStatus = {}));
var DriverTransactionSortFields;
(function (DriverTransactionSortFields) {
    DriverTransactionSortFields["CreatedAt"] = "createdAt";
    DriverTransactionSortFields["DriverId"] = "driverId";
})(DriverTransactionSortFields || (DriverTransactionSortFields = {}));
var DriverWalletSortFields;
(function (DriverWalletSortFields) {
    DriverWalletSortFields["Balance"] = "balance";
    DriverWalletSortFields["Currency"] = "currency";
    DriverWalletSortFields["DriverId"] = "driverId";
    DriverWalletSortFields["Id"] = "id";
})(DriverWalletSortFields || (DriverWalletSortFields = {}));
var ExportTable;
(function (ExportTable) {
    ExportTable["DriverWallet"] = "DriverWallet";
    ExportTable["FleetWallet"] = "FleetWallet";
    ExportTable["ProviderWallet"] = "ProviderWallet";
    ExportTable["RiderWallet"] = "RiderWallet";
})(ExportTable || (ExportTable = {}));
var ExportType;
(function (ExportType) {
    ExportType["Csv"] = "CSV";
})(ExportType || (ExportType = {}));
var FeedbackParameterSortFields;
(function (FeedbackParameterSortFields) {
    FeedbackParameterSortFields["Id"] = "id";
})(FeedbackParameterSortFields || (FeedbackParameterSortFields = {}));
var FeedbackSortFields;
(function (FeedbackSortFields) {
    FeedbackSortFields["DriverId"] = "driverId";
    FeedbackSortFields["Id"] = "id";
    FeedbackSortFields["RequestId"] = "requestId";
})(FeedbackSortFields || (FeedbackSortFields = {}));
var FleetSortFields;
(function (FleetSortFields) {
    FleetSortFields["Id"] = "id";
    FleetSortFields["Name"] = "name";
})(FleetSortFields || (FleetSortFields = {}));
var FleetTransactionSortFields;
(function (FleetTransactionSortFields) {
    FleetTransactionSortFields["FleetId"] = "fleetId";
    FleetTransactionSortFields["Id"] = "id";
    FleetTransactionSortFields["OperatorId"] = "operatorId";
    FleetTransactionSortFields["RequestId"] = "requestId";
})(FleetTransactionSortFields || (FleetTransactionSortFields = {}));
var FleetWalletSortFields;
(function (FleetWalletSortFields) {
    FleetWalletSortFields["Balance"] = "balance";
    FleetWalletSortFields["Currency"] = "currency";
    FleetWalletSortFields["FleetId"] = "fleetId";
    FleetWalletSortFields["Id"] = "id";
})(FleetWalletSortFields || (FleetWalletSortFields = {}));
var Gender;
(function (Gender) {
    Gender["Female"] = "Female";
    Gender["Male"] = "Male";
    Gender["Unknown"] = "Unknown";
})(Gender || (Gender = {}));
var MediaSortFields;
(function (MediaSortFields) {
    MediaSortFields["Id"] = "id";
})(MediaSortFields || (MediaSortFields = {}));
var MessageStatus;
(function (MessageStatus) {
    MessageStatus["Delivered"] = "Delivered";
    MessageStatus["Seen"] = "Seen";
    MessageStatus["Sent"] = "Sent";
})(MessageStatus || (MessageStatus = {}));
var OperatorPermission;
(function (OperatorPermission) {
    OperatorPermission["AnnouncementsEdit"] = "Announcements_Edit";
    OperatorPermission["AnnouncementsView"] = "Announcements_View";
    OperatorPermission["CarsEdit"] = "Cars_Edit";
    OperatorPermission["CarsView"] = "Cars_View";
    OperatorPermission["ComplaintsEdit"] = "Complaints_Edit";
    OperatorPermission["ComplaintsView"] = "Complaints_View";
    OperatorPermission["CouponsEdit"] = "Coupons_Edit";
    OperatorPermission["CouponsView"] = "Coupons_View";
    OperatorPermission["DriverWalletEdit"] = "DriverWallet_Edit";
    OperatorPermission["DriverWalletView"] = "DriverWallet_View";
    OperatorPermission["DriversEdit"] = "Drivers_Edit";
    OperatorPermission["DriversView"] = "Drivers_View";
    OperatorPermission["FleetWalletEdit"] = "FleetWallet_Edit";
    OperatorPermission["FleetWalletView"] = "FleetWallet_View";
    OperatorPermission["FleetsEdit"] = "Fleets_Edit";
    OperatorPermission["FleetsView"] = "Fleets_View";
    OperatorPermission["GatewaysEdit"] = "Gateways_Edit";
    OperatorPermission["GatewaysView"] = "Gateways_View";
    OperatorPermission["ProviderWalletEdit"] = "ProviderWallet_Edit";
    OperatorPermission["ProviderWalletView"] = "ProviderWallet_View";
    OperatorPermission["RegionsEdit"] = "Regions_Edit";
    OperatorPermission["RegionsView"] = "Regions_View";
    OperatorPermission["RequestsView"] = "Requests_View";
    OperatorPermission["RiderWalletEdit"] = "RiderWallet_Edit";
    OperatorPermission["RiderWalletView"] = "RiderWallet_View";
    OperatorPermission["RidersEdit"] = "Riders_Edit";
    OperatorPermission["RidersView"] = "Riders_View";
    OperatorPermission["ServicesEdit"] = "Services_Edit";
    OperatorPermission["ServicesView"] = "Services_View";
    OperatorPermission["UsersEdit"] = "Users_Edit";
    OperatorPermission["UsersView"] = "Users_View";
})(OperatorPermission || (OperatorPermission = {}));
var OperatorRoleSortFields;
(function (OperatorRoleSortFields) {
    OperatorRoleSortFields["Id"] = "id";
})(OperatorRoleSortFields || (OperatorRoleSortFields = {}));
var OperatorSortFields;
(function (OperatorSortFields) {
    OperatorSortFields["Id"] = "id";
})(OperatorSortFields || (OperatorSortFields = {}));
var OrderMessageSortFields;
(function (OrderMessageSortFields) {
    OrderMessageSortFields["Id"] = "id";
})(OrderMessageSortFields || (OrderMessageSortFields = {}));
var OrderSortFields;
(function (OrderSortFields) {
    OrderSortFields["CreatedOn"] = "createdOn";
    OrderSortFields["DriverId"] = "driverId";
    OrderSortFields["Id"] = "id";
    OrderSortFields["RiderId"] = "riderId";
    OrderSortFields["Status"] = "status";
})(OrderSortFields || (OrderSortFields = {}));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Arrived"] = "Arrived";
    OrderStatus["Booked"] = "Booked";
    OrderStatus["DriverAccepted"] = "DriverAccepted";
    OrderStatus["DriverCanceled"] = "DriverCanceled";
    OrderStatus["Expired"] = "Expired";
    OrderStatus["Finished"] = "Finished";
    OrderStatus["Found"] = "Found";
    OrderStatus["NoCloseFound"] = "NoCloseFound";
    OrderStatus["NotFound"] = "NotFound";
    OrderStatus["Requested"] = "Requested";
    OrderStatus["RiderCanceled"] = "RiderCanceled";
    OrderStatus["Started"] = "Started";
    OrderStatus["WaitingForPostPay"] = "WaitingForPostPay";
    OrderStatus["WaitingForPrePay"] = "WaitingForPrePay";
    OrderStatus["WaitingForReview"] = "WaitingForReview";
})(OrderStatus || (OrderStatus = {}));
var PaymentGatewaySortFields;
(function (PaymentGatewaySortFields) {
    PaymentGatewaySortFields["Id"] = "id";
})(PaymentGatewaySortFields || (PaymentGatewaySortFields = {}));
var PaymentGatewayType;
(function (PaymentGatewayType) {
    PaymentGatewayType["AmazonPaymentServices"] = "AmazonPaymentServices";
    PaymentGatewayType["BrainTree"] = "BrainTree";
    PaymentGatewayType["CustomLink"] = "CustomLink";
    PaymentGatewayType["Flutterwave"] = "Flutterwave";
    PaymentGatewayType["Instamojo"] = "Instamojo";
    PaymentGatewayType["Mips"] = "MIPS";
    PaymentGatewayType["MercadoPago"] = "MercadoPago";
    PaymentGatewayType["MyTMoney"] = "MyTMoney";
    PaymentGatewayType["PayGate"] = "PayGate";
    PaymentGatewayType["PayPal"] = "PayPal";
    PaymentGatewayType["PayU"] = "PayU";
    PaymentGatewayType["Paystack"] = "Paystack";
    PaymentGatewayType["Paytm"] = "Paytm";
    PaymentGatewayType["Razorpay"] = "Razorpay";
    PaymentGatewayType["Stripe"] = "Stripe";
    PaymentGatewayType["WayForPay"] = "WayForPay";
})(PaymentGatewayType || (PaymentGatewayType = {}));
var ProviderDeductTransactionType;
(function (ProviderDeductTransactionType) {
    ProviderDeductTransactionType["Withdraw"] = "Withdraw";
})(ProviderDeductTransactionType || (ProviderDeductTransactionType = {}));
var ProviderRechargeTransactionType;
(function (ProviderRechargeTransactionType) {
    ProviderRechargeTransactionType["Commission"] = "Commission";
})(ProviderRechargeTransactionType || (ProviderRechargeTransactionType = {}));
var ProviderTransactionSortFields;
(function (ProviderTransactionSortFields) {
    ProviderTransactionSortFields["Id"] = "id";
    ProviderTransactionSortFields["OperatorId"] = "operatorId";
    ProviderTransactionSortFields["RequestId"] = "requestId";
})(ProviderTransactionSortFields || (ProviderTransactionSortFields = {}));
var ProviderWalletSortFields;
(function (ProviderWalletSortFields) {
    ProviderWalletSortFields["Balance"] = "balance";
    ProviderWalletSortFields["Currency"] = "currency";
    ProviderWalletSortFields["Id"] = "id";
})(ProviderWalletSortFields || (ProviderWalletSortFields = {}));
var RegionSortFields;
(function (RegionSortFields) {
    RegionSortFields["Currency"] = "currency";
    RegionSortFields["Id"] = "id";
})(RegionSortFields || (RegionSortFields = {}));
var RequestActivitySortFields;
(function (RequestActivitySortFields) {
    RequestActivitySortFields["Id"] = "id";
})(RequestActivitySortFields || (RequestActivitySortFields = {}));
var RequestActivityType;
(function (RequestActivityType) {
    RequestActivityType["ArrivedToDestination"] = "ArrivedToDestination";
    RequestActivityType["ArrivedToPickupPoint"] = "ArrivedToPickupPoint";
    RequestActivityType["BookedByOperator"] = "BookedByOperator";
    RequestActivityType["BookedByRider"] = "BookedByRider";
    RequestActivityType["CanceledByDriver"] = "CanceledByDriver";
    RequestActivityType["CanceledByOperator"] = "CanceledByOperator";
    RequestActivityType["CanceledByRider"] = "CanceledByRider";
    RequestActivityType["DriverAccepted"] = "DriverAccepted";
    RequestActivityType["Expired"] = "Expired";
    RequestActivityType["Paid"] = "Paid";
    RequestActivityType["RequestedByOperator"] = "RequestedByOperator";
    RequestActivityType["RequestedByRider"] = "RequestedByRider";
    RequestActivityType["Reviewed"] = "Reviewed";
    RequestActivityType["Started"] = "Started";
})(RequestActivityType || (RequestActivityType = {}));
var RiderAddressSortFields;
(function (RiderAddressSortFields) {
    RiderAddressSortFields["Id"] = "id";
    RiderAddressSortFields["RiderId"] = "riderId";
})(RiderAddressSortFields || (RiderAddressSortFields = {}));
var RiderAddressType;
(function (RiderAddressType) {
    RiderAddressType["Cafe"] = "Cafe";
    RiderAddressType["Gym"] = "Gym";
    RiderAddressType["Home"] = "Home";
    RiderAddressType["Other"] = "Other";
    RiderAddressType["Parent"] = "Parent";
    RiderAddressType["Park"] = "Park";
    RiderAddressType["Partner"] = "Partner";
    RiderAddressType["Work"] = "Work";
})(RiderAddressType || (RiderAddressType = {}));
var RiderDeductTransactionType;
(function (RiderDeductTransactionType) {
    RiderDeductTransactionType["Correction"] = "Correction";
    RiderDeductTransactionType["OrderFee"] = "OrderFee";
    RiderDeductTransactionType["Withdraw"] = "Withdraw";
})(RiderDeductTransactionType || (RiderDeductTransactionType = {}));
var RiderRechargeTransactionType;
(function (RiderRechargeTransactionType) {
    RiderRechargeTransactionType["BankTransfer"] = "BankTransfer";
    RiderRechargeTransactionType["Correction"] = "Correction";
    RiderRechargeTransactionType["Gift"] = "Gift";
    RiderRechargeTransactionType["InAppPayment"] = "InAppPayment";
})(RiderRechargeTransactionType || (RiderRechargeTransactionType = {}));
var RiderSortFields;
(function (RiderSortFields) {
    RiderSortFields["FirstName"] = "firstName";
    RiderSortFields["Gender"] = "gender";
    RiderSortFields["Id"] = "id";
    RiderSortFields["LastName"] = "lastName";
    RiderSortFields["MobileNumber"] = "mobileNumber";
})(RiderSortFields || (RiderSortFields = {}));
var RiderStatus;
(function (RiderStatus) {
    RiderStatus["Disabled"] = "Disabled";
    RiderStatus["Enabled"] = "Enabled";
})(RiderStatus || (RiderStatus = {}));
var RiderTransactionSortFields;
(function (RiderTransactionSortFields) {
    RiderTransactionSortFields["Amount"] = "amount";
    RiderTransactionSortFields["CreatedAt"] = "createdAt";
    RiderTransactionSortFields["Currency"] = "currency";
    RiderTransactionSortFields["Id"] = "id";
    RiderTransactionSortFields["RiderId"] = "riderId";
})(RiderTransactionSortFields || (RiderTransactionSortFields = {}));
var RiderWalletSortFields;
(function (RiderWalletSortFields) {
    RiderWalletSortFields["Balance"] = "balance";
    RiderWalletSortFields["Id"] = "id";
    RiderWalletSortFields["RiderId"] = "riderId";
})(RiderWalletSortFields || (RiderWalletSortFields = {}));
var ServiceCategorySortFields;
(function (ServiceCategorySortFields) {
    ServiceCategorySortFields["Id"] = "id";
})(ServiceCategorySortFields || (ServiceCategorySortFields = {}));
var ServiceOptionIcon;
(function (ServiceOptionIcon) {
    ServiceOptionIcon["Custom1"] = "Custom1";
    ServiceOptionIcon["Custom2"] = "Custom2";
    ServiceOptionIcon["Custom3"] = "Custom3";
    ServiceOptionIcon["Custom4"] = "Custom4";
    ServiceOptionIcon["Custom5"] = "Custom5";
    ServiceOptionIcon["Luggage"] = "Luggage";
    ServiceOptionIcon["PackageDelivery"] = "PackageDelivery";
    ServiceOptionIcon["Pet"] = "Pet";
    ServiceOptionIcon["Shopping"] = "Shopping";
    ServiceOptionIcon["TwoWay"] = "TwoWay";
})(ServiceOptionIcon || (ServiceOptionIcon = {}));
var ServiceOptionType;
(function (ServiceOptionType) {
    ServiceOptionType["Free"] = "Free";
    ServiceOptionType["Paid"] = "Paid";
    ServiceOptionType["TwoWay"] = "TwoWay";
})(ServiceOptionType || (ServiceOptionType = {}));
var ServicePaymentMethod;
(function (ServicePaymentMethod) {
    ServicePaymentMethod["CashCredit"] = "CashCredit";
    ServicePaymentMethod["OnlyCash"] = "OnlyCash";
    ServicePaymentMethod["OnlyCredit"] = "OnlyCredit";
})(ServicePaymentMethod || (ServicePaymentMethod = {}));
var ServiceSortFields;
(function (ServiceSortFields) {
    ServiceSortFields["CategoryId"] = "categoryId";
    ServiceSortFields["Id"] = "id";
})(ServiceSortFields || (ServiceSortFields = {}));
/** Sort Directions */
var SortDirection;
(function (SortDirection) {
    SortDirection["Asc"] = "ASC";
    SortDirection["Desc"] = "DESC";
})(SortDirection || (SortDirection = {}));
/** Sort Nulls Options */
var SortNulls;
(function (SortNulls) {
    SortNulls["NullsFirst"] = "NULLS_FIRST";
    SortNulls["NullsLast"] = "NULLS_LAST";
})(SortNulls || (SortNulls = {}));
var TransactionAction;
(function (TransactionAction) {
    TransactionAction["Deduct"] = "Deduct";
    TransactionAction["Recharge"] = "Recharge";
})(TransactionAction || (TransactionAction = {}));
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["Canceled"] = "Canceled";
    TransactionStatus["Done"] = "Done";
    TransactionStatus["Processing"] = "Processing";
    TransactionStatus["Rejected"] = "Rejected";
})(TransactionStatus || (TransactionStatus = {}));
var UpdateConfigStatus;
(function (UpdateConfigStatus) {
    UpdateConfigStatus["Invalid"] = "INVALID";
    UpdateConfigStatus["Ok"] = "OK";
})(UpdateConfigStatus || (UpdateConfigStatus = {}));
var UpdatePurchaseCodeStatus;
(function (UpdatePurchaseCodeStatus) {
    UpdatePurchaseCodeStatus["ClientFound"] = "CLIENT_FOUND";
    UpdatePurchaseCodeStatus["Invalid"] = "INVALID";
    UpdatePurchaseCodeStatus["Ok"] = "OK";
    UpdatePurchaseCodeStatus["Overused"] = "OVERUSED";
})(UpdatePurchaseCodeStatus || (UpdatePurchaseCodeStatus = {}));
const DriverOverviewInfoFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    fragment DriverOverviewInfo on Driver {
  id
  firstName
  lastName
  mobileNumber
  status
}
    `;
const DriverLocationFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    fragment DriverLocation on OnlineDriver {
  location {
    lat
    lng
  }
  driverId
  lastUpdatedAt
}
    `;
const ViewComplaintDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query ViewComplaint($id: ID!) {
  complaint(id: $id) {
    id
    inscriptionTimestamp
    status
    subject
    content
    requestedByDriver
    activities {
      type
      comment
      actor {
        firstName
        lastName
      }
      assignedTo {
        firstName
        lastName
      }
    }
    order {
      id
      status
      createdOn
      startTimestamp
      finishTimestamp
      expectedTimestamp
      costBest
      costAfterCoupon
      addresses
      currency
      rider {
        id
        mobileNumber
        status
        firstName
        lastName
        registrationTimestamp
      }
      driver {
        id
        mobileNumber
        status
        firstName
        lastName
        registrationTimestamp
      }
    }
  }
}
    `;
class ViewComplaintGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = ViewComplaintDocument;
    }
}
ViewComplaintGQL.ɵfac = function ViewComplaintGQL_Factory(t) { return new (t || ViewComplaintGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
ViewComplaintGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ViewComplaintGQL, factory: ViewComplaintGQL.ɵfac, providedIn: 'root' });
const UpdateComplaintStatusDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation UpdateComplaintStatus($id: ID!, $status: ComplaintStatus!) {
  updateOneComplaint(input: {id: $id, update: {status: $status}}) {
    id
  }
}
    `;
class UpdateComplaintStatusGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = UpdateComplaintStatusDocument;
    }
}
UpdateComplaintStatusGQL.ɵfac = function UpdateComplaintStatusGQL_Factory(t) { return new (t || UpdateComplaintStatusGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
UpdateComplaintStatusGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UpdateComplaintStatusGQL, factory: UpdateComplaintStatusGQL.ɵfac, providedIn: 'root' });
const ComplaintsListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query ComplaintsList($paging: OffsetPaging) {
  complaints(paging: $paging) {
    nodes {
      id
      inscriptionTimestamp
      subject
      status
      content
    }
    totalCount
  }
}
    `;
class ComplaintsListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = ComplaintsListDocument;
    }
}
ComplaintsListGQL.ɵfac = function ComplaintsListGQL_Factory(t) { return new (t || ComplaintsListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
ComplaintsListGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ComplaintsListGQL, factory: ComplaintsListGQL.ɵfac, providedIn: 'root' });
const CreateDriverDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation CreateDriver($input: CreateDriver!) {
  createOneDriver(input: {driver: $input}) {
    id
  }
}
    `;
class CreateDriverGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CreateDriverDocument;
    }
}
CreateDriverGQL.ɵfac = function CreateDriverGQL_Factory(t) { return new (t || CreateDriverGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
CreateDriverGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CreateDriverGQL, factory: CreateDriverGQL.ɵfac, providedIn: 'root' });
const ViewDriverDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query ViewDriver($id: ID!) {
  driver(id: $id) {
    id
    firstName
    lastName
    mobileNumber
    registrationTimestamp
    lastSeenTimestamp
    status
    gender
    carId
    carColorId
    fleetId
    carProductionYear
    carPlate
    accountNumber
    bankName
    bankRoutingNumber
    bankSwift
    address
    email
    enabledServices {
      id
    }
    documents {
      id
      address
    }
    media {
      address
    }
    rating
    reviewCount
  }
  services {
    id
    name
  }
  fleets {
    nodes {
      id
      name
    }
  }
  carModels {
    nodes {
      id
      name
    }
  }
  carColors {
    id
    name
  }
}
    `;
class ViewDriverGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = ViewDriverDocument;
    }
}
ViewDriverGQL.ɵfac = function ViewDriverGQL_Factory(t) { return new (t || ViewDriverGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
ViewDriverGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ViewDriverGQL, factory: ViewDriverGQL.ɵfac, providedIn: 'root' });
const UpdateDriverProfileDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation UpdateDriverProfile($id: ID!, $update: UpdateDriverInput!, $serviceIds: [ID!]!) {
  updateOneDriver(input: {id: $id, update: $update}) {
    id
  }
  setEnabledServicesOnDriver(input: {id: $id, relationIds: $serviceIds}) {
    id
  }
}
    `;
class UpdateDriverProfileGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = UpdateDriverProfileDocument;
    }
}
UpdateDriverProfileGQL.ɵfac = function UpdateDriverProfileGQL_Factory(t) { return new (t || UpdateDriverProfileGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
UpdateDriverProfileGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UpdateDriverProfileGQL, factory: UpdateDriverProfileGQL.ɵfac, providedIn: 'root' });
const UpdateDriverStatusDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation UpdateDriverStatus($id: ID!, $status: DriverStatus) {
  updateOneDriver(input: {id: $id, update: {status: $status}}) {
    id
  }
}
    `;
class UpdateDriverStatusGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = UpdateDriverStatusDocument;
    }
}
UpdateDriverStatusGQL.ɵfac = function UpdateDriverStatusGQL_Factory(t) { return new (t || UpdateDriverStatusGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
UpdateDriverStatusGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UpdateDriverStatusGQL, factory: UpdateDriverStatusGQL.ɵfac, providedIn: 'root' });
const DriverFinancialsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query DriverFinancials($id: ID!, $paging: OffsetPaging, $filter: DriverTransactionFilter, $sorting: [DriverTransactionSort!]) {
  driver(id: $id) {
    transactions(filter: $filter, paging: $paging, sorting: $sorting) {
      nodes {
        status
        createdAt
        amount
        description
        currency
        action
        deductType
        rechargeType
        refrenceNumber
        requestId
        paymentGatewayId
        operatorId
      }
      totalCount
    }
    wallets {
      balance
      currency
    }
  }
  regions {
    nodes {
      currency
    }
  }
}
    `;
class DriverFinancialsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = DriverFinancialsDocument;
    }
}
DriverFinancialsGQL.ɵfac = function DriverFinancialsGQL_Factory(t) { return new (t || DriverFinancialsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
DriverFinancialsGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DriverFinancialsGQL, factory: DriverFinancialsGQL.ɵfac, providedIn: 'root' });
const DriverFeedbacksDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query DriverFeedbacks($id: ID!, $paging: OffsetPaging) {
  feedbacks(filter: {driverId: {eq: $id}}, paging: $paging) {
    nodes {
      id
      requestId
      reviewTimestamp
      score
      description
      parameters {
        isGood
        title
      }
    }
  }
}
    `;
class DriverFeedbacksGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = DriverFeedbacksDocument;
    }
}
DriverFeedbacksGQL.ɵfac = function DriverFeedbacksGQL_Factory(t) { return new (t || DriverFeedbacksGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
DriverFeedbacksGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DriverFeedbacksGQL, factory: DriverFeedbacksGQL.ɵfac, providedIn: 'root' });
const DriverOrdersDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query DriverOrders($driverId: ID!, $filter: OrderFilter, $paging: OffsetPaging, $sorting: [OrderSort!]) {
  driver(id: $driverId) {
    orders(filter: $filter, paging: $paging, sorting: $sorting) {
      nodes {
        id
        createdOn
        status
        distanceBest
        durationBest
        costBest
        costAfterCoupon
        currency
        addresses
        points {
          lat
          lng
        }
        expectedTimestamp
      }
      totalCount
    }
  }
}
    `;
class DriverOrdersGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = DriverOrdersDocument;
    }
}
DriverOrdersGQL.ɵfac = function DriverOrdersGQL_Factory(t) { return new (t || DriverOrdersGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
DriverOrdersGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DriverOrdersGQL, factory: DriverOrdersGQL.ɵfac, providedIn: 'root' });
const CreateDriverTransactionDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation CreateDriverTransaction($input: DriverTransactionInput!) {
  createDriverTransaction(input: $input) {
    id
  }
}
    `;
class CreateDriverTransactionGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CreateDriverTransactionDocument;
    }
}
CreateDriverTransactionGQL.ɵfac = function CreateDriverTransactionGQL_Factory(t) { return new (t || CreateDriverTransactionGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
CreateDriverTransactionGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CreateDriverTransactionGQL, factory: CreateDriverTransactionGQL.ɵfac, providedIn: 'root' });
const DriversListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query DriversList($paging: OffsetPaging, $filter: DriverFilter, $sorting: [DriverSort!]) {
  drivers(paging: $paging, filter: $filter, sorting: $sorting) {
    nodes {
      id
      firstName
      lastName
      gender
      mobileNumber
      status
    }
    totalCount
  }
}
    `;
class DriversListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = DriversListDocument;
    }
}
DriversListGQL.ɵfac = function DriversListGQL_Factory(t) { return new (t || DriversListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
DriversListGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DriversListGQL, factory: DriversListGQL.ɵfac, providedIn: 'root' });
const ProviderWalletsListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query ProviderWalletsList($paging: OffsetPaging) {
  providerTransactions(paging: $paging) {
    nodes {
      createdAt
      action
      deductType
      rechargeType
      amount
      currency
      description
      requestId
      operatorId
    }
    totalCount
  }
  providerWallets {
    balance
    currency
  }
  regions {
    nodes {
      currency
    }
  }
}
    `;
class ProviderWalletsListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = ProviderWalletsListDocument;
    }
}
ProviderWalletsListGQL.ɵfac = function ProviderWalletsListGQL_Factory(t) { return new (t || ProviderWalletsListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
ProviderWalletsListGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProviderWalletsListGQL, factory: ProviderWalletsListGQL.ɵfac, providedIn: 'root' });
const ExportDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query Export($input: ExportArgs!) {
  export(input: $input) {
    url
  }
}
    `;
class ExportGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = ExportDocument;
    }
}
ExportGQL.ɵfac = function ExportGQL_Factory(t) { return new (t || ExportGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
ExportGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ExportGQL, factory: ExportGQL.ɵfac, providedIn: 'root' });
const DriverWalletsListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query DriverWalletsList($paging: OffsetPaging) {
  driverWallets(paging: $paging) {
    nodes {
      id
      driverId
      balance
      currency
      driver {
        firstName
        lastName
      }
    }
    totalCount
  }
  regions {
    nodes {
      currency
    }
  }
}
    `;
class DriverWalletsListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = DriverWalletsListDocument;
    }
}
DriverWalletsListGQL.ɵfac = function DriverWalletsListGQL_Factory(t) { return new (t || DriverWalletsListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
DriverWalletsListGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DriverWalletsListGQL, factory: DriverWalletsListGQL.ɵfac, providedIn: 'root' });
const FleetWalletsListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query FleetWalletsList($paging: OffsetPaging, $filter: FleetWalletFilter) {
  fleetWallets(paging: $paging, filter: $filter) {
    nodes {
      id
      balance
      currency
      fleetId
      fleet {
        name
      }
    }
    totalCount
  }
  regions {
    nodes {
      currency
    }
  }
}
    `;
class FleetWalletsListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = FleetWalletsListDocument;
    }
}
FleetWalletsListGQL.ɵfac = function FleetWalletsListGQL_Factory(t) { return new (t || FleetWalletsListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
FleetWalletsListGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FleetWalletsListGQL, factory: FleetWalletsListGQL.ɵfac, providedIn: 'root' });
const RiderWalletsListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query RiderWalletsList($paging: OffsetPaging) {
  riderWallets(paging: $paging) {
    nodes {
      balance
      currency
      riderId
      rider {
        firstName
        lastName
      }
    }
    totalCount
  }
  regions {
    nodes {
      currency
    }
  }
}
    `;
class RiderWalletsListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = RiderWalletsListDocument;
    }
}
RiderWalletsListGQL.ɵfac = function RiderWalletsListGQL_Factory(t) { return new (t || RiderWalletsListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
RiderWalletsListGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RiderWalletsListGQL, factory: RiderWalletsListGQL.ɵfac, providedIn: 'root' });
const DispatcherCalculateFareDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query DispatcherCalculateFare($points: [PointInput!]!) {
  calculateFare(input: {points: $points}) {
    currency
    distance
    duration
    services {
      name
      services {
        id
        name
        cost
      }
    }
  }
}
    `;
class DispatcherCalculateFareGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = DispatcherCalculateFareDocument;
    }
}
DispatcherCalculateFareGQL.ɵfac = function DispatcherCalculateFareGQL_Factory(t) { return new (t || DispatcherCalculateFareGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
DispatcherCalculateFareGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DispatcherCalculateFareGQL, factory: DispatcherCalculateFareGQL.ɵfac, providedIn: 'root' });
const CreateOrderDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation CreateOrder($riderId: ID!, $points: [PointInput!]!, $addresses: [String!]!, $serviceId: ID!) {
  createOrder(
    input: {points: $points, serviceId: $serviceId, addresses: $addresses, intervalMinutes: 0, riderId: $riderId}
  ) {
    id
  }
}
    `;
class CreateOrderGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CreateOrderDocument;
    }
}
CreateOrderGQL.ɵfac = function CreateOrderGQL_Factory(t) { return new (t || CreateOrderGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
CreateOrderGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CreateOrderGQL, factory: CreateOrderGQL.ɵfac, providedIn: 'root' });
const OrderUpdatedDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    subscription OrderUpdated($id: ID!) {
  orderUpdated(orderId: $id) {
    id
    status
    driver {
      firstName
      lastName
      mobileNumber
    }
  }
}
    `;
class OrderUpdatedGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Subscription {
    constructor(apollo) {
        super(apollo);
        this.document = OrderUpdatedDocument;
    }
}
OrderUpdatedGQL.ɵfac = function OrderUpdatedGQL_Factory(t) { return new (t || OrderUpdatedGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
OrderUpdatedGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrderUpdatedGQL, factory: OrderUpdatedGQL.ɵfac, providedIn: 'root' });
const CancelOrderDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation CancelOrder($orderId: ID!) {
  cancelOrder(orderId: $orderId) {
    id
    status
  }
}
    `;
class CancelOrderGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CancelOrderDocument;
    }
}
CancelOrderGQL.ɵfac = function CancelOrderGQL_Factory(t) { return new (t || CancelOrderGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
CancelOrderGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CancelOrderGQL, factory: CancelOrderGQL.ɵfac, providedIn: 'root' });
const OverviewDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query Overview {
  complaintAggregate(filter: {status: {in: [Submitted, UnderInvestigation]}}) {
    count {
      id
    }
  }
  driverAggregate(filter: {status: {eq: PendingApproval}}) {
    count {
      id
    }
  }
  activeOrders: orderAggregate(
    filter: {status: {in: [DriverAccepted, Arrived, Started, WaitingForPostPay]}}
  ) {
    count {
      id
    }
  }
  bookedOrders: orderAggregate(filter: {status: {eq: Booked}}) {
    count {
      id
    }
  }
  getDriversLocation(center: {lat: 45, lng: 45}, count: 150) {
    ...DriverLocation
  }
  drivers(paging: {limit: 5}, filter: {status: {in: [Online, InService]}}) {
    nodes {
      ...DriverOverviewInfo
    }
    totalCount
  }
}
    ${DriverLocationFragmentDoc}
${DriverOverviewInfoFragmentDoc}`;
class OverviewGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = OverviewDocument;
    }
}
OverviewGQL.ɵfac = function OverviewGQL_Factory(t) { return new (t || OverviewGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
OverviewGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OverviewGQL, factory: OverviewGQL.ɵfac, providedIn: 'root' });
const OverviewDriverPagingDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query OverviewDriverPaging($offset: Int!) {
  drivers(
    paging: {limit: 5, offset: $offset}
    filter: {status: {in: [Online, InService]}}
  ) {
    nodes {
      ...DriverOverviewInfo
    }
    totalCount
  }
}
    ${DriverOverviewInfoFragmentDoc}`;
class OverviewDriverPagingGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = OverviewDriverPagingDocument;
    }
}
OverviewDriverPagingGQL.ɵfac = function OverviewDriverPagingGQL_Factory(t) { return new (t || OverviewDriverPagingGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
OverviewDriverPagingGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OverviewDriverPagingGQL, factory: OverviewDriverPagingGQL.ɵfac, providedIn: 'root' });
const RequestsChartDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query RequestsChart($timeframe: ChartTimeframe!) {
  requestChart(timeframe: $timeframe) {
    items {
      time
      count
      status
    }
  }
}
    `;
class RequestsChartGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = RequestsChartDocument;
    }
}
RequestsChartGQL.ɵfac = function RequestsChartGQL_Factory(t) { return new (t || RequestsChartGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
RequestsChartGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RequestsChartGQL, factory: RequestsChartGQL.ɵfac, providedIn: 'root' });
const IncomeChartDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query IncomeChart($timeframe: ChartTimeframe!) {
  incomeChart(timeframe: $timeframe) {
    items {
      time
      sum
      currency
    }
  }
}
    `;
class IncomeChartGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = IncomeChartDocument;
    }
}
IncomeChartGQL.ɵfac = function IncomeChartGQL_Factory(t) { return new (t || IncomeChartGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
IncomeChartGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: IncomeChartGQL, factory: IncomeChartGQL.ɵfac, providedIn: 'root' });
const CarsListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query CarsList {
  carModels(paging: {limit: 50}) {
    nodes {
      id
      name
    }
  }
  carColors {
    id
    name
  }
}
    `;
class CarsListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = CarsListDocument;
    }
}
CarsListGQL.ɵfac = function CarsListGQL_Factory(t) { return new (t || CarsListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
CarsListGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CarsListGQL, factory: CarsListGQL.ɵfac, providedIn: 'root' });
const DeleteCarModelDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation DeleteCarModel($id: ID!) {
  deleteOneCarModel(input: {id: $id}) {
    id
  }
}
    `;
class DeleteCarModelGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = DeleteCarModelDocument;
    }
}
DeleteCarModelGQL.ɵfac = function DeleteCarModelGQL_Factory(t) { return new (t || DeleteCarModelGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
DeleteCarModelGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DeleteCarModelGQL, factory: DeleteCarModelGQL.ɵfac, providedIn: 'root' });
const DeleteCarColorDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation DeleteCarColor($id: ID!) {
  deleteOneCarColor(input: {id: $id}) {
    id
  }
}
    `;
class DeleteCarColorGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = DeleteCarColorDocument;
    }
}
DeleteCarColorGQL.ɵfac = function DeleteCarColorGQL_Factory(t) { return new (t || DeleteCarColorGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
DeleteCarColorGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DeleteCarColorGQL, factory: DeleteCarColorGQL.ɵfac, providedIn: 'root' });
const CreateCarModelDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation CreateCarModel($input: CreateCarModel!) {
  createOneCarModel(input: {carModel: $input}) {
    id
  }
}
    `;
class CreateCarModelGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CreateCarModelDocument;
    }
}
CreateCarModelGQL.ɵfac = function CreateCarModelGQL_Factory(t) { return new (t || CreateCarModelGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
CreateCarModelGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CreateCarModelGQL, factory: CreateCarModelGQL.ɵfac, providedIn: 'root' });
const CreateCarColorDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation CreateCarColor($input: CreateCarColor!) {
  createOneCarColor(input: {carColor: $input}) {
    id
  }
}
    `;
class CreateCarColorGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CreateCarColorDocument;
    }
}
CreateCarColorGQL.ɵfac = function CreateCarColorGQL_Factory(t) { return new (t || CreateCarColorGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
CreateCarColorGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CreateCarColorGQL, factory: CreateCarColorGQL.ɵfac, providedIn: 'root' });
const UpdateCarModelDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation UpdateCarModel($id: ID!, $input: UpdateCarModel!) {
  updateOneCarModel(input: {id: $id, update: $input}) {
    id
  }
}
    `;
class UpdateCarModelGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = UpdateCarModelDocument;
    }
}
UpdateCarModelGQL.ɵfac = function UpdateCarModelGQL_Factory(t) { return new (t || UpdateCarModelGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
UpdateCarModelGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UpdateCarModelGQL, factory: UpdateCarModelGQL.ɵfac, providedIn: 'root' });
const UpdateCarColorDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation UpdateCarColor($id: ID!, $input: UpdateCarColor!) {
  updateOneCarColor(input: {id: $id, update: $input}) {
    id
  }
}
    `;
class UpdateCarColorGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = UpdateCarColorDocument;
    }
}
UpdateCarColorGQL.ɵfac = function UpdateCarColorGQL_Factory(t) { return new (t || UpdateCarColorGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
UpdateCarColorGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UpdateCarColorGQL, factory: UpdateCarColorGQL.ɵfac, providedIn: 'root' });
const CreateFleetDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation CreateFleet($input: CreateFleet!) {
  createOneFleet(input: {fleet: $input}) {
    id
  }
}
    `;
class CreateFleetGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CreateFleetDocument;
    }
}
CreateFleetGQL.ɵfac = function CreateFleetGQL_Factory(t) { return new (t || CreateFleetGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
CreateFleetGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CreateFleetGQL, factory: CreateFleetGQL.ɵfac, providedIn: 'root' });
const ViewFleetDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query ViewFleet($id: ID!) {
  fleet(id: $id) {
    id
    name
    phoneNumber
    address
    mobileNumber
    accountNumber
    commissionSharePercent
    commissionShareFlat
    exclusivityAreas {
      lat
      lng
    }
  }
}
    `;
class ViewFleetGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = ViewFleetDocument;
    }
}
ViewFleetGQL.ɵfac = function ViewFleetGQL_Factory(t) { return new (t || ViewFleetGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
ViewFleetGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ViewFleetGQL, factory: ViewFleetGQL.ɵfac, providedIn: 'root' });
const FleetFinancialsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query FleetFinancials($id: ID!, $paging: OffsetPaging, $filter: FleetTransactionFilter, $sorting: [FleetTransactionSort!]) {
  fleet(id: $id) {
    transactions(paging: $paging, filter: $filter, sorting: $sorting) {
      nodes {
        transactionTimestamp
        amount
        currency
        action
        deductType
        rechargeType
        refrenceNumber
        operatorId
        requestId
        description
      }
      totalCount
    }
    wallets {
      currency
      balance
    }
  }
  regions {
    nodes {
      currency
    }
  }
}
    `;
class FleetFinancialsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = FleetFinancialsDocument;
    }
}
FleetFinancialsGQL.ɵfac = function FleetFinancialsGQL_Factory(t) { return new (t || FleetFinancialsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
FleetFinancialsGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FleetFinancialsGQL, factory: FleetFinancialsGQL.ɵfac, providedIn: 'root' });
const FleetDriversDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query FleetDrivers($id: ID!, $paging: OffsetPaging) {
  drivers(filter: {fleetId: {eq: $id}}, paging: $paging) {
    nodes {
      id
      firstName
      lastName
      mobileNumber
    }
  }
}
    `;
class FleetDriversGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = FleetDriversDocument;
    }
}
FleetDriversGQL.ɵfac = function FleetDriversGQL_Factory(t) { return new (t || FleetDriversGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
FleetDriversGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FleetDriversGQL, factory: FleetDriversGQL.ɵfac, providedIn: 'root' });
const UpdateFleetDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation UpdateFleet($id: ID!, $update: UpdateFleet!) {
  updateOneFleet(input: {id: $id, update: $update}) {
    id
  }
}
    `;
class UpdateFleetGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = UpdateFleetDocument;
    }
}
UpdateFleetGQL.ɵfac = function UpdateFleetGQL_Factory(t) { return new (t || UpdateFleetGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
UpdateFleetGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UpdateFleetGQL, factory: UpdateFleetGQL.ɵfac, providedIn: 'root' });
const CreateFleetTransactionDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation CreateFleetTransaction($input: FleetTransactionInput!) {
  createFleetTransaction(input: $input) {
    id
  }
}
    `;
class CreateFleetTransactionGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CreateFleetTransactionDocument;
    }
}
CreateFleetTransactionGQL.ɵfac = function CreateFleetTransactionGQL_Factory(t) { return new (t || CreateFleetTransactionGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
CreateFleetTransactionGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CreateFleetTransactionGQL, factory: CreateFleetTransactionGQL.ɵfac, providedIn: 'root' });
const FleetsListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query FleetsList($paging: OffsetPaging, $filter: FleetFilter) {
  fleets(paging: $paging, filter: $filter) {
    nodes {
      id
      name
      phoneNumber
      address
    }
    totalCount
  }
}
    `;
class FleetsListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = FleetsListDocument;
    }
}
FleetsListGQL.ɵfac = function FleetsListGQL_Factory(t) { return new (t || FleetsListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
FleetsListGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FleetsListGQL, factory: FleetsListGQL.ɵfac, providedIn: 'root' });
const ViewPaymentGatewayDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query ViewPaymentGateway($id: ID!) {
  paymentGateway(id: $id) {
    id
    title
    type
    enabled
    privateKey
    publicKey
    merchantId
    saltKey
    mediaId
    media {
      address
    }
  }
}
    `;
class ViewPaymentGatewayGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = ViewPaymentGatewayDocument;
    }
}
ViewPaymentGatewayGQL.ɵfac = function ViewPaymentGatewayGQL_Factory(t) { return new (t || ViewPaymentGatewayGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
ViewPaymentGatewayGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ViewPaymentGatewayGQL, factory: ViewPaymentGatewayGQL.ɵfac, providedIn: 'root' });
const CreatePaymentGatewayDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation CreatePaymentGateway($input: CreatePaymentGateway!) {
  createOnePaymentGateway(input: {paymentGateway: $input}) {
    id
  }
}
    `;
class CreatePaymentGatewayGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CreatePaymentGatewayDocument;
    }
}
CreatePaymentGatewayGQL.ɵfac = function CreatePaymentGatewayGQL_Factory(t) { return new (t || CreatePaymentGatewayGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
CreatePaymentGatewayGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CreatePaymentGatewayGQL, factory: CreatePaymentGatewayGQL.ɵfac, providedIn: 'root' });
const UpdatePaymentGatewayDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation UpdatePaymentGateway($id: ID!, $input: UpdatePaymentGateway!) {
  updateOnePaymentGateway(input: {id: $id, update: $input}) {
    id
  }
}
    `;
class UpdatePaymentGatewayGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = UpdatePaymentGatewayDocument;
    }
}
UpdatePaymentGatewayGQL.ɵfac = function UpdatePaymentGatewayGQL_Factory(t) { return new (t || UpdatePaymentGatewayGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
UpdatePaymentGatewayGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UpdatePaymentGatewayGQL, factory: UpdatePaymentGatewayGQL.ɵfac, providedIn: 'root' });
const PaymentGatewaysDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query PaymentGateways($paging: OffsetPaging) {
  paymentGateways(paging: $paging) {
    nodes {
      id
      enabled
      title
      type
    }
    totalCount
  }
}
    `;
class PaymentGatewaysGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = PaymentGatewaysDocument;
    }
}
PaymentGatewaysGQL.ɵfac = function PaymentGatewaysGQL_Factory(t) { return new (t || PaymentGatewaysGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
PaymentGatewaysGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PaymentGatewaysGQL, factory: PaymentGatewaysGQL.ɵfac, providedIn: 'root' });
const RegionListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query RegionList($paging: OffsetPaging) {
  regions(paging: $paging) {
    nodes {
      id
      name
      currency
      enabled
      location {
        lat
        lng
      }
    }
    totalCount
  }
}
    `;
class RegionListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = RegionListDocument;
    }
}
RegionListGQL.ɵfac = function RegionListGQL_Factory(t) { return new (t || RegionListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
RegionListGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RegionListGQL, factory: RegionListGQL.ɵfac, providedIn: 'root' });
const RegionViewDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query RegionView($id: ID!) {
  region(id: $id) {
    id
    name
    currency
    enabled
    location {
      lat
      lng
    }
  }
}
    `;
class RegionViewGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = RegionViewDocument;
    }
}
RegionViewGQL.ɵfac = function RegionViewGQL_Factory(t) { return new (t || RegionViewGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
RegionViewGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RegionViewGQL, factory: RegionViewGQL.ɵfac, providedIn: 'root' });
const UpdateRegionDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation UpdateRegion($id: ID!, $update: UpdateRegion!) {
  updateOneRegion(input: {id: $id, update: $update}) {
    id
  }
}
    `;
class UpdateRegionGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = UpdateRegionDocument;
    }
}
UpdateRegionGQL.ɵfac = function UpdateRegionGQL_Factory(t) { return new (t || UpdateRegionGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
UpdateRegionGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UpdateRegionGQL, factory: UpdateRegionGQL.ɵfac, providedIn: 'root' });
const CreateRegionDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation CreateRegion($input: CreateRegion!) {
  createOneRegion(input: {region: $input}) {
    id
  }
}
    `;
class CreateRegionGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CreateRegionDocument;
    }
}
CreateRegionGQL.ɵfac = function CreateRegionGQL_Factory(t) { return new (t || CreateRegionGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
CreateRegionGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CreateRegionGQL, factory: CreateRegionGQL.ɵfac, providedIn: 'root' });
const ReviewParameterViewDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query ReviewParameterView($id: ID!) {
  feedbackParameter(id: $id) {
    id
    title
    isGood
  }
}
    `;
class ReviewParameterViewGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = ReviewParameterViewDocument;
    }
}
ReviewParameterViewGQL.ɵfac = function ReviewParameterViewGQL_Factory(t) { return new (t || ReviewParameterViewGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
ReviewParameterViewGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ReviewParameterViewGQL, factory: ReviewParameterViewGQL.ɵfac, providedIn: 'root' });
const UpdateReviewParameterDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation UpdateReviewParameter($id: ID!, $update: UpdateFeedbackParameter!) {
  updateOneFeedbackParameter(input: {id: $id, update: $update}) {
    id
  }
}
    `;
class UpdateReviewParameterGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = UpdateReviewParameterDocument;
    }
}
UpdateReviewParameterGQL.ɵfac = function UpdateReviewParameterGQL_Factory(t) { return new (t || UpdateReviewParameterGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
UpdateReviewParameterGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UpdateReviewParameterGQL, factory: UpdateReviewParameterGQL.ɵfac, providedIn: 'root' });
const CreateReviewParameterDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation CreateReviewParameter($input: CreateFeedbackParameter!) {
  createOneFeedbackParameter(input: {feedbackParameter: $input}) {
    id
  }
}
    `;
class CreateReviewParameterGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CreateReviewParameterDocument;
    }
}
CreateReviewParameterGQL.ɵfac = function CreateReviewParameterGQL_Factory(t) { return new (t || CreateReviewParameterGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
CreateReviewParameterGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CreateReviewParameterGQL, factory: CreateReviewParameterGQL.ɵfac, providedIn: 'root' });
const ReviewParametersListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query ReviewParametersList {
  feedbackParameters {
    id
    title
    isGood
  }
}
    `;
class ReviewParametersListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = ReviewParametersListDocument;
    }
}
ReviewParametersListGQL.ɵfac = function ReviewParametersListGQL_Factory(t) { return new (t || ReviewParametersListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
ReviewParametersListGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ReviewParametersListGQL, factory: ReviewParametersListGQL.ɵfac, providedIn: 'root' });
const RolesDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query Roles {
  operatorRoles {
    id
    title
  }
}
    `;
class RolesGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = RolesDocument;
    }
}
RolesGQL.ɵfac = function RolesGQL_Factory(t) { return new (t || RolesGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
RolesGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RolesGQL, factory: RolesGQL.ɵfac, providedIn: 'root' });
const RoleDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query Role($id: ID!) {
  operatorRole(id: $id) {
    id
    title
    permissions
  }
}
    `;
class RoleGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = RoleDocument;
    }
}
RoleGQL.ɵfac = function RoleGQL_Factory(t) { return new (t || RoleGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
RoleGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RoleGQL, factory: RoleGQL.ɵfac, providedIn: 'root' });
const CreateRoleDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation CreateRole($input: CreateOperatorRole!) {
  createOneOperatorRole(input: {operatorRole: $input}) {
    id
    title
    permissions
  }
}
    `;
class CreateRoleGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CreateRoleDocument;
    }
}
CreateRoleGQL.ɵfac = function CreateRoleGQL_Factory(t) { return new (t || CreateRoleGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
CreateRoleGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CreateRoleGQL, factory: CreateRoleGQL.ɵfac, providedIn: 'root' });
const UpdateRoleDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation UpdateRole($id: ID!, $input: UpdateOperatorRole!) {
  updateOneOperatorRole(input: {id: $id, update: $input}) {
    id
  }
}
    `;
class UpdateRoleGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = UpdateRoleDocument;
    }
}
UpdateRoleGQL.ɵfac = function UpdateRoleGQL_Factory(t) { return new (t || UpdateRoleGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
UpdateRoleGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UpdateRoleGQL, factory: UpdateRoleGQL.ɵfac, providedIn: 'root' });
const ViewServiceCategoryDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query ViewServiceCategory($id: ID!) {
  serviceCategory(id: $id) {
    id
    name
  }
}
    `;
class ViewServiceCategoryGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = ViewServiceCategoryDocument;
    }
}
ViewServiceCategoryGQL.ɵfac = function ViewServiceCategoryGQL_Factory(t) { return new (t || ViewServiceCategoryGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
ViewServiceCategoryGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ViewServiceCategoryGQL, factory: ViewServiceCategoryGQL.ɵfac, providedIn: 'root' });
const CreateServiceCategoryDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation CreateServiceCategory($input: CreateServiceCategory!) {
  createOneServiceCategory(input: {serviceCategory: $input}) {
    id
  }
}
    `;
class CreateServiceCategoryGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CreateServiceCategoryDocument;
    }
}
CreateServiceCategoryGQL.ɵfac = function CreateServiceCategoryGQL_Factory(t) { return new (t || CreateServiceCategoryGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
CreateServiceCategoryGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CreateServiceCategoryGQL, factory: CreateServiceCategoryGQL.ɵfac, providedIn: 'root' });
const UpdateServiceCategoryDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation UpdateServiceCategory($id: ID!, $input: UpdateServiceCategory!) {
  updateOneServiceCategory(input: {id: $id, update: $input}) {
    id
  }
}
    `;
class UpdateServiceCategoryGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = UpdateServiceCategoryDocument;
    }
}
UpdateServiceCategoryGQL.ɵfac = function UpdateServiceCategoryGQL_Factory(t) { return new (t || UpdateServiceCategoryGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
UpdateServiceCategoryGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UpdateServiceCategoryGQL, factory: UpdateServiceCategoryGQL.ɵfac, providedIn: 'root' });
const DeleteServiceCategoryDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation DeleteServiceCategory($id: ID!) {
  deleteOneServiceCategory(input: {id: $id}) {
    id
  }
}
    `;
class DeleteServiceCategoryGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = DeleteServiceCategoryDocument;
    }
}
DeleteServiceCategoryGQL.ɵfac = function DeleteServiceCategoryGQL_Factory(t) { return new (t || DeleteServiceCategoryGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
DeleteServiceCategoryGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DeleteServiceCategoryGQL, factory: DeleteServiceCategoryGQL.ɵfac, providedIn: 'root' });
const ServicesListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query ServicesList {
  serviceCategories {
    id
    name
    services {
      id
      name
      media {
        address
      }
    }
  }
}
    `;
class ServicesListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = ServicesListDocument;
    }
}
ServicesListGQL.ɵfac = function ServicesListGQL_Factory(t) { return new (t || ServicesListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
ServicesListGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ServicesListGQL, factory: ServicesListGQL.ɵfac, providedIn: 'root' });
const ViewServiceDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query ViewService($id: ID!) {
  service(id: $id) {
    id
    name
    categoryId
    baseFare
    perHundredMeters
    perMinuteDrive
    perMinuteWait
    minimumFee
    searchRadius
    maximumDestinationDistance
    paymentMethod
    cancellationTotalFee
    cancellationDriverShare
    providerShareFlat
    providerSharePercent
    prepayPercent
    searchRadius
    mediaId
    description
    personCapacity
    media {
      address
    }
    timeMultipliers {
      startTime
      endTime
      multiply
    }
    distanceMultipliers {
      distanceFrom
      distanceTo
      multiply
    }
    regions {
      id
      name
      currency
    }
  }
  regions {
    nodes {
      id
      name
      currency
    }
  }
  serviceCategories {
    id
    name
  }
}
    `;
class ViewServiceGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = ViewServiceDocument;
    }
}
ViewServiceGQL.ɵfac = function ViewServiceGQL_Factory(t) { return new (t || ViewServiceGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
ViewServiceGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ViewServiceGQL, factory: ViewServiceGQL.ɵfac, providedIn: 'root' });
const NewServiceDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query NewService {
  regions {
    nodes {
      id
      name
      currency
    }
  }
  serviceCategories {
    id
    name
  }
}
    `;
class NewServiceGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = NewServiceDocument;
    }
}
NewServiceGQL.ɵfac = function NewServiceGQL_Factory(t) { return new (t || NewServiceGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
NewServiceGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NewServiceGQL, factory: NewServiceGQL.ɵfac, providedIn: 'root' });
const CreateServiceDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation CreateService($input: CreateService!) {
  createOneService(input: {service: $input}) {
    id
  }
}
    `;
class CreateServiceGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CreateServiceDocument;
    }
}
CreateServiceGQL.ɵfac = function CreateServiceGQL_Factory(t) { return new (t || CreateServiceGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
CreateServiceGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CreateServiceGQL, factory: CreateServiceGQL.ɵfac, providedIn: 'root' });
const UpdateServiceDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation UpdateService($id: ID!, $input: UpdateService!) {
  updateOneService(input: {id: $id, update: $input}) {
    id
  }
}
    `;
class UpdateServiceGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = UpdateServiceDocument;
    }
}
UpdateServiceGQL.ɵfac = function UpdateServiceGQL_Factory(t) { return new (t || UpdateServiceGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
UpdateServiceGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UpdateServiceGQL, factory: UpdateServiceGQL.ɵfac, providedIn: 'root' });
const SetRegionsOnServiceDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation SetRegionsOnService($id: ID!, $relationIds: [ID!]!) {
  setRegionsOnService(input: {id: $id, relationIds: $relationIds}) {
    id
  }
}
    `;
class SetRegionsOnServiceGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = SetRegionsOnServiceDocument;
    }
}
SetRegionsOnServiceGQL.ɵfac = function SetRegionsOnServiceGQL_Factory(t) { return new (t || SetRegionsOnServiceGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
SetRegionsOnServiceGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SetRegionsOnServiceGQL, factory: SetRegionsOnServiceGQL.ɵfac, providedIn: 'root' });
const UpdatePasswordDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation UpdatePassword($input: UpdatePasswordInput!) {
  updatePassword(input: $input) {
    id
  }
}
    `;
class UpdatePasswordGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = UpdatePasswordDocument;
    }
}
UpdatePasswordGQL.ɵfac = function UpdatePasswordGQL_Factory(t) { return new (t || UpdatePasswordGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
UpdatePasswordGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UpdatePasswordGQL, factory: UpdatePasswordGQL.ɵfac, providedIn: 'root' });
const CreateOperatorDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation CreateOperator($input: CreateOperatorInput!) {
  createOneOperator(input: {operator: $input}) {
    id
  }
}
    `;
class CreateOperatorGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CreateOperatorDocument;
    }
}
CreateOperatorGQL.ɵfac = function CreateOperatorGQL_Factory(t) { return new (t || CreateOperatorGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
CreateOperatorGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CreateOperatorGQL, factory: CreateOperatorGQL.ɵfac, providedIn: 'root' });
const ViewOperatorDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query ViewOperator($id: ID!) {
  operator(id: $id) {
    id
    firstName
    lastName
    mobileNumber
    userName
    email
    roleId
  }
  operatorRoles {
    id
    title
  }
}
    `;
class ViewOperatorGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = ViewOperatorDocument;
    }
}
ViewOperatorGQL.ɵfac = function ViewOperatorGQL_Factory(t) { return new (t || ViewOperatorGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
ViewOperatorGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ViewOperatorGQL, factory: ViewOperatorGQL.ɵfac, providedIn: 'root' });
const NewOperatorDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query NewOperator {
  operatorRoles {
    id
    title
  }
}
    `;
class NewOperatorGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = NewOperatorDocument;
    }
}
NewOperatorGQL.ɵfac = function NewOperatorGQL_Factory(t) { return new (t || NewOperatorGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
NewOperatorGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NewOperatorGQL, factory: NewOperatorGQL.ɵfac, providedIn: 'root' });
const UpdateOperatorDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation UpdateOperator($id: ID!, $update: UpdateOperator!) {
  updateOneOperator(input: {id: $id, update: $update}) {
    id
  }
}
    `;
class UpdateOperatorGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = UpdateOperatorDocument;
    }
}
UpdateOperatorGQL.ɵfac = function UpdateOperatorGQL_Factory(t) { return new (t || UpdateOperatorGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
UpdateOperatorGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UpdateOperatorGQL, factory: UpdateOperatorGQL.ɵfac, providedIn: 'root' });
const UsersListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query UsersList($paging: OffsetPaging) {
  operators(paging: $paging) {
    nodes {
      id
      userName
      firstName
      lastName
    }
    totalCount
  }
}
    `;
class UsersListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = UsersListDocument;
    }
}
UsersListGQL.ɵfac = function UsersListGQL_Factory(t) { return new (t || UsersListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
UsersListGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UsersListGQL, factory: UsersListGQL.ɵfac, providedIn: 'root' });
const ViewAnnouncementDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query ViewAnnouncement($id: ID!) {
  announcement(id: $id) {
    id
    title
    description
    url
    startAt
    expireAt
  }
}
    `;
class ViewAnnouncementGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = ViewAnnouncementDocument;
    }
}
ViewAnnouncementGQL.ɵfac = function ViewAnnouncementGQL_Factory(t) { return new (t || ViewAnnouncementGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
ViewAnnouncementGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ViewAnnouncementGQL, factory: ViewAnnouncementGQL.ɵfac, providedIn: 'root' });
const CreateAnnouncementDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation CreateAnnouncement($input: CreateAnnouncement!) {
  createOneAnnouncement(input: {announcement: $input}) {
    id
  }
}
    `;
class CreateAnnouncementGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CreateAnnouncementDocument;
    }
}
CreateAnnouncementGQL.ɵfac = function CreateAnnouncementGQL_Factory(t) { return new (t || CreateAnnouncementGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
CreateAnnouncementGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CreateAnnouncementGQL, factory: CreateAnnouncementGQL.ɵfac, providedIn: 'root' });
const UpdateAnnouncementDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation UpdateAnnouncement($id: ID!, $input: UpdateAnnouncement!) {
  updateOneAnnouncement(input: {id: $id, update: $input}) {
    id
  }
}
    `;
class UpdateAnnouncementGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = UpdateAnnouncementDocument;
    }
}
UpdateAnnouncementGQL.ɵfac = function UpdateAnnouncementGQL_Factory(t) { return new (t || UpdateAnnouncementGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
UpdateAnnouncementGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UpdateAnnouncementGQL, factory: UpdateAnnouncementGQL.ɵfac, providedIn: 'root' });
const AnnouncementsListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query AnnouncementsList($paging: OffsetPaging) {
  announcements(paging: $paging) {
    nodes {
      id
      title
      description
      startAt
      expireAt
    }
    totalCount
  }
}
    `;
class AnnouncementsListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = AnnouncementsListDocument;
    }
}
AnnouncementsListGQL.ɵfac = function AnnouncementsListGQL_Factory(t) { return new (t || AnnouncementsListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
AnnouncementsListGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AnnouncementsListGQL, factory: AnnouncementsListGQL.ɵfac, providedIn: 'root' });
const ViewCouponDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query ViewCoupon($id: ID!) {
  coupon(id: $id) {
    id
    isEnabled
    code
    title
    description
    manyUsersCanUse
    manyTimesUserCanUse
    minimumCost
    maximumCost
    startAt
    expireAt
    discountPercent
    discountFlat
    creditGift
    isEnabled
    isFirstTravelOnly
    allowedServices {
      id
      name
    }
  }
}
    `;
class ViewCouponGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = ViewCouponDocument;
    }
}
ViewCouponGQL.ɵfac = function ViewCouponGQL_Factory(t) { return new (t || ViewCouponGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
ViewCouponGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ViewCouponGQL, factory: ViewCouponGQL.ɵfac, providedIn: 'root' });
const CreateCouponDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation CreateCoupon($input: CreateCoupon!) {
  createOneCoupon(input: {coupon: $input}) {
    id
  }
}
    `;
class CreateCouponGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CreateCouponDocument;
    }
}
CreateCouponGQL.ɵfac = function CreateCouponGQL_Factory(t) { return new (t || CreateCouponGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
CreateCouponGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CreateCouponGQL, factory: CreateCouponGQL.ɵfac, providedIn: 'root' });
const UpdateCouponDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation UpdateCoupon($id: ID!, $input: UpdateCoupon!) {
  updateOneCoupon(input: {id: $id, update: $input}) {
    id
  }
}
    `;
class UpdateCouponGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = UpdateCouponDocument;
    }
}
UpdateCouponGQL.ɵfac = function UpdateCouponGQL_Factory(t) { return new (t || UpdateCouponGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
UpdateCouponGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UpdateCouponGQL, factory: UpdateCouponGQL.ɵfac, providedIn: 'root' });
const CouponListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query CouponList($paging: OffsetPaging) {
  coupons(paging: $paging) {
    nodes {
      id
      code
      title
      isEnabled
      description
      startAt
      expireAt
    }
    totalCount
  }
}
    `;
class CouponListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = CouponListDocument;
    }
}
CouponListGQL.ɵfac = function CouponListGQL_Factory(t) { return new (t || CouponListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
CouponListGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CouponListGQL, factory: CouponListGQL.ɵfac, providedIn: 'root' });
const AvailableDriversForOrderDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query AvailableDriversForOrder($center: PointInput!, $count: Int!) {
  getDriversLocationWithData(center: $center, count: $count) {
    id
    location {
      lat
      lng
    }
    mobileNumber
    firstName
    lastName
    lastUpdatedAt
    rating
    reviewCount
    status
  }
}
    `;
class AvailableDriversForOrderGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = AvailableDriversForOrderDocument;
    }
}
AvailableDriversForOrderGQL.ɵfac = function AvailableDriversForOrderGQL_Factory(t) { return new (t || AvailableDriversForOrderGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
AvailableDriversForOrderGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AvailableDriversForOrderGQL, factory: AvailableDriversForOrderGQL.ɵfac, providedIn: 'root' });
const DriverSearchDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query DriverSearch($filter: String!) {
  drivers(
    filter: {or: [{mobileNumber: {like: $filter}}, {lastName: {like: $filter}}]}
  ) {
    nodes {
      id
      mobileNumber
      firstName
      lastName
      rating
      reviewCount
      status
    }
  }
}
    `;
class DriverSearchGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = DriverSearchDocument;
    }
}
DriverSearchGQL.ɵfac = function DriverSearchGQL_Factory(t) { return new (t || DriverSearchGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
DriverSearchGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DriverSearchGQL, factory: DriverSearchGQL.ɵfac, providedIn: 'root' });
const AssignDriverToOrderDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation AssignDriverToOrder($orderId: ID!, $driverId: ID!) {
  assignDriverToOrder(orderId: $orderId, driverId: $driverId) {
    id
  }
}
    `;
class AssignDriverToOrderGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = AssignDriverToOrderDocument;
    }
}
AssignDriverToOrderGQL.ɵfac = function AssignDriverToOrderGQL_Factory(t) { return new (t || AssignDriverToOrderGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
AssignDriverToOrderGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AssignDriverToOrderGQL, factory: AssignDriverToOrderGQL.ɵfac, providedIn: 'root' });
const ViewOrderDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query ViewOrder($id: ID!) {
  order(id: $id) {
    id
    createdOn
    costBest
    costAfterCoupon
    status
    currency
    distanceBest
    durationBest
    startTimestamp
    finishTimestamp
    addresses
    points {
      lat
      lng
    }
    service {
      name
    }
    driver {
      id
      firstName
      lastName
      mobileNumber
      registrationTimestamp
      status
      media {
        address
      }
    }
    rider {
      id
      firstName
      lastName
      mobileNumber
      registrationTimestamp
      status
      media {
        address
      }
    }
    complaints {
      id
      subject
      inscriptionTimestamp
      content
      requestedByDriver
    }
    conversations {
      sentAt
      sentByDriver
      status
      content
    }
    activities {
      createdAt
      type
    }
    coupon {
      title
      code
      expireAt
    }
    riderTransactions {
      action
      rechargeType
      deductType
      amount
      status
      currency
      refrenceNumber
      paymentGateway {
        title
      }
    }
    driverTransactions {
      action
      rechargeType
      deductType
      amount
      status
      currency
      refrenceNumber
    }
    providerTransactions {
      action
      rechargeType
      deductType
      amount
      currency
      refrenceNumber
    }
    fleetTransactions {
      action
      rechargeType
      deductType
      amount
      currency
      refrenceNumber
    }
  }
}
    `;
class ViewOrderGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = ViewOrderDocument;
    }
}
ViewOrderGQL.ɵfac = function ViewOrderGQL_Factory(t) { return new (t || ViewOrderGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
ViewOrderGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ViewOrderGQL, factory: ViewOrderGQL.ɵfac, providedIn: 'root' });
const OrdersListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query OrdersList($paging: OffsetPaging, $filter: OrderFilter, $sorting: [OrderSort!]) {
  orders(paging: $paging, filter: $filter, sorting: $sorting) {
    nodes {
      id
      status
      createdOn
      costAfterCoupon
      currency
    }
    totalCount
  }
}
    `;
class OrdersListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = OrdersListDocument;
    }
}
OrdersListGQL.ɵfac = function OrdersListGQL_Factory(t) { return new (t || OrdersListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
OrdersListGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrdersListGQL, factory: OrdersListGQL.ɵfac, providedIn: 'root' });
const CreateRiderDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation CreateRider($input: CreateRider!) {
  createOneRider(input: {rider: $input}) {
    id
    firstName
    lastName
    mobileNumber
    gender
  }
}
    `;
class CreateRiderGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CreateRiderDocument;
    }
}
CreateRiderGQL.ɵfac = function CreateRiderGQL_Factory(t) { return new (t || CreateRiderGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
CreateRiderGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CreateRiderGQL, factory: CreateRiderGQL.ɵfac, providedIn: 'root' });
const ViewRiderDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query ViewRider($id: ID!) {
  rider(id: $id) {
    id
    status
    firstName
    lastName
    mobileNumber
    media {
      address
    }
    mobileNumber
    registrationTimestamp
    email
    gender
    wallets(sorting: [{field: balance, direction: DESC}], paging: {limit: 1}) {
      nodes {
        balance
        currency
      }
    }
  }
}
    `;
class ViewRiderGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = ViewRiderDocument;
    }
}
ViewRiderGQL.ɵfac = function ViewRiderGQL_Factory(t) { return new (t || ViewRiderGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
ViewRiderGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ViewRiderGQL, factory: ViewRiderGQL.ɵfac, providedIn: 'root' });
const RiderAddressesDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query RiderAddresses($riderId: ID!, $paging: OffsetPaging) {
  riderAddresses(filter: {riderId: {eq: $riderId}}, paging: $paging) {
    nodes {
      title
      details
      location {
        lat
        lng
      }
    }
  }
}
    `;
class RiderAddressesGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = RiderAddressesDocument;
    }
}
RiderAddressesGQL.ɵfac = function RiderAddressesGQL_Factory(t) { return new (t || RiderAddressesGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
RiderAddressesGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RiderAddressesGQL, factory: RiderAddressesGQL.ɵfac, providedIn: 'root' });
const RiderWalletDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query RiderWallet($riderId: ID!, $paging: OffsetPaging, $filter: RiderTransactionFilter, $sorting: [RiderTransactionSort!]) {
  rider(id: $riderId) {
    wallets {
      nodes {
        balance
        currency
      }
    }
    transactions(paging: $paging, sorting: $sorting, filter: $filter) {
      nodes {
        action
        deductType
        status
        createdAt
        rechargeType
        amount
        currency
        refrenceNumber
        description
        paymentGatewayId
        operatorId
        requestId
      }
      totalCount
    }
  }
  regions {
    nodes {
      currency
    }
  }
}
    `;
class RiderWalletGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = RiderWalletDocument;
    }
}
RiderWalletGQL.ɵfac = function RiderWalletGQL_Factory(t) { return new (t || RiderWalletGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
RiderWalletGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RiderWalletGQL, factory: RiderWalletGQL.ɵfac, providedIn: 'root' });
const RiderOrdersDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query RiderOrders($riderId: ID!, $filter: OrderFilter, $paging: OffsetPaging, $sorting: [OrderSort!]) {
  rider(id: $riderId) {
    orders(paging: $paging, filter: $filter, sorting: $sorting) {
      nodes {
        id
        createdOn
        status
        distanceBest
        durationBest
        costBest
        costAfterCoupon
        currency
        addresses
        points {
          lat
          lng
        }
        expectedTimestamp
      }
      totalCount
    }
  }
}
    `;
class RiderOrdersGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = RiderOrdersDocument;
    }
}
RiderOrdersGQL.ɵfac = function RiderOrdersGQL_Factory(t) { return new (t || RiderOrdersGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
RiderOrdersGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RiderOrdersGQL, factory: RiderOrdersGQL.ɵfac, providedIn: 'root' });
const UpdateRiderDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation UpdateRider($id: ID!, $update: UpdateRider!) {
  updateOneRider(input: {id: $id, update: $update}) {
    id
  }
}
    `;
class UpdateRiderGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = UpdateRiderDocument;
    }
}
UpdateRiderGQL.ɵfac = function UpdateRiderGQL_Factory(t) { return new (t || UpdateRiderGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
UpdateRiderGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UpdateRiderGQL, factory: UpdateRiderGQL.ɵfac, providedIn: 'root' });
const CreateRiderTransactionDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation CreateRiderTransaction($input: RiderTransactionInput!) {
  createRiderTransaction(input: $input) {
    id
  }
}
    `;
class CreateRiderTransactionGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CreateRiderTransactionDocument;
    }
}
CreateRiderTransactionGQL.ɵfac = function CreateRiderTransactionGQL_Factory(t) { return new (t || CreateRiderTransactionGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
CreateRiderTransactionGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CreateRiderTransactionGQL, factory: CreateRiderTransactionGQL.ɵfac, providedIn: 'root' });
const RidersListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query RidersList($filter: RiderFilter, $paging: OffsetPaging, $sorting: [RiderSort!]) {
  riders(filter: $filter, paging: $paging, sorting: $sorting) {
    nodes {
      id
      firstName
      lastName
      gender
      mobileNumber
    }
    totalCount
  }
}
    `;
class RidersListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = RidersListDocument;
    }
}
RidersListGQL.ɵfac = function RidersListGQL_Factory(t) { return new (t || RidersListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
RidersListGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RidersListGQL, factory: RidersListGQL.ɵfac, providedIn: 'root' });
const CurrentConfigurationDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query CurrentConfiguration {
  currentConfiguration {
    purchaseCode
    backendMapsAPIKey
    adminPanelAPIKey
    firebaseProjectPrivateKey
  }
}
    `;
class CurrentConfigurationGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = CurrentConfigurationDocument;
    }
}
CurrentConfigurationGQL.ɵfac = function CurrentConfigurationGQL_Factory(t) { return new (t || CurrentConfigurationGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
CurrentConfigurationGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CurrentConfigurationGQL, factory: CurrentConfigurationGQL.ɵfac, providedIn: 'root' });
const UpdatePurchaseCodeDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation UpdatePurchaseCode($code: String!) {
  updatePurchaseCode(purchaseCode: $code) {
    status
    clients {
      ip
    }
  }
}
    `;
class UpdatePurchaseCodeGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = UpdatePurchaseCodeDocument;
    }
}
UpdatePurchaseCodeGQL.ɵfac = function UpdatePurchaseCodeGQL_Factory(t) { return new (t || UpdatePurchaseCodeGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
UpdatePurchaseCodeGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UpdatePurchaseCodeGQL, factory: UpdatePurchaseCodeGQL.ɵfac, providedIn: 'root' });
const UpdateMapsApiKeyDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation UpdateMapsAPIKey($backend: String!, $adminPanel: String!) {
  updateMapsAPIKey(backend: $backend, adminPanel: $adminPanel) {
    status
    message
  }
}
    `;
class UpdateMapsApiKeyGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = UpdateMapsApiKeyDocument;
    }
}
UpdateMapsApiKeyGQL.ɵfac = function UpdateMapsApiKeyGQL_Factory(t) { return new (t || UpdateMapsApiKeyGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
UpdateMapsApiKeyGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UpdateMapsApiKeyGQL, factory: UpdateMapsApiKeyGQL.ɵfac, providedIn: 'root' });
const UpdateFirebaseDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation UpdateFirebase($keyFileName: String!) {
  updateFirebase(keyFileName: $keyFileName) {
    status
    message
  }
}
    `;
class UpdateFirebaseGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = UpdateFirebaseDocument;
    }
}
UpdateFirebaseGQL.ɵfac = function UpdateFirebaseGQL_Factory(t) { return new (t || UpdateFirebaseGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
UpdateFirebaseGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UpdateFirebaseGQL, factory: UpdateFirebaseGQL.ɵfac, providedIn: 'root' });
const DisableServerDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation DisableServer($ip: String!) {
  disablePreviousServer(ip: $ip) {
    status
    message
  }
}
    `;
class DisableServerGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = DisableServerDocument;
    }
}
DisableServerGQL.ɵfac = function DisableServerGQL_Factory(t) { return new (t || DisableServerGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
DisableServerGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DisableServerGQL, factory: DisableServerGQL.ɵfac, providedIn: 'root' });
const LoginDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query Login($username: String!, $password: String!) {
  login(userName: $username, password: $password) {
    token
  }
}
    `;
class LoginGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = LoginDocument;
    }
}
LoginGQL.ɵfac = function LoginGQL_Factory(t) { return new (t || LoginGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__.Apollo)); };
LoginGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoginGQL, factory: LoginGQL.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7202:
/*!*****************************************!*\
  !*** ./src/app/@components/g2/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzG2Directive": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.NzG2Directive),
/* harmony export */   "NzG2Module": () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.NzG2Module)
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ 45057);
/**
  * @license
  * Copyright Alibaba.com All Rights Reserved.
  *
  * Use of this source code is governed by an MIT-style license that can be
  * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
  */



/***/ }),

/***/ 50970:
/*!***************************************************!*\
  !*** ./src/app/@components/g2/nz-g2.directive.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzG2Directive": () => (/* binding */ NzG2Directive)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @antv/g2 */ 95977);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 66506);




class NzG2Directive {
    constructor(elementRef, ngZone) {
        this.ngZone = ngZone;
        this.nzChartInitialized = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.el = elementRef.nativeElement;
    }
    ngAfterViewInit() {
        (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.inNextTick)().subscribe(() => {
            this.createChartInstance();
        });
    }
    createChartInstance() {
        this.ngZone.runOutsideAngular(() => {
            this.chartInstance = new _antv_g2__WEBPACK_IMPORTED_MODULE_0__.Chart(Object.assign({ container: this.el, autoFit: true }, this.nzChartOptions));
            setTimeout(() => {
                this.chartInstance.forceFit();
            }, 350);
            this.nzChartInitialized.next(this.chartInstance);
        });
    }
}
NzG2Directive.ɵfac = function NzG2Directive_Factory(t) { return new (t || NzG2Directive)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone)); };
NzG2Directive.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NzG2Directive, selectors: [["div", "nzG2", ""], ["div", "nz-g2", ""]], hostVars: 2, hostBindings: function NzG2Directive_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-g2", true);
    } }, inputs: { nzChartOptions: "nzChartOptions" }, outputs: { nzChartInitialized: "nzChartInitialized" }, exportAs: ["nzG2"] });


/***/ }),

/***/ 28312:
/*!************************************************!*\
  !*** ./src/app/@components/g2/nz-g2.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzG2Module": () => (/* binding */ NzG2Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _nz_g2_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nz-g2.directive */ 50970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/**
  * @license
  * Copyright Alibaba.com All Rights Reserved.
  *
  * Use of this source code is governed by an MIT-style license that can be
  * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
  */



class NzG2Module {
}
NzG2Module.ɵfac = function NzG2Module_Factory(t) { return new (t || NzG2Module)(); };
NzG2Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzG2Module });
NzG2Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzG2Module, { declarations: [_nz_g2_directive__WEBPACK_IMPORTED_MODULE_0__.NzG2Directive], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_nz_g2_directive__WEBPACK_IMPORTED_MODULE_0__.NzG2Directive] }); })();


/***/ }),

/***/ 45057:
/*!**********************************************!*\
  !*** ./src/app/@components/g2/public-api.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzG2Directive": () => (/* reexport safe */ _nz_g2_directive__WEBPACK_IMPORTED_MODULE_1__.NzG2Directive),
/* harmony export */   "NzG2Module": () => (/* reexport safe */ _nz_g2_module__WEBPACK_IMPORTED_MODULE_0__.NzG2Module)
/* harmony export */ });
/* harmony import */ var _nz_g2_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nz-g2.module */ 28312);
/* harmony import */ var _nz_g2_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nz-g2.directive */ 50970);
/**
  * @license
  * Copyright Alibaba.com All Rights Reserved.
  *
  * Use of this source code is governed by an MIT-style license that can be
  * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
  */




/***/ }),

/***/ 45497:
/*!**********************************************!*\
  !*** ./src/app/@components/shared.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _icons_provider_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icons-provider.module */ 21210);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/google-maps */ 62754);
/* harmony import */ var _services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../@services/tag-color/tag-color.service */ 95233);
/* harmony import */ var _pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@pipes/phone.pipe */ 5390);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 13903);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 23992);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/empty */ 94555);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/form */ 49671);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ng-zorro-antd/grid */ 93395);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/icon */ 75869);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/input */ 32077);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 2415);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/message */ 36007);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/modal */ 25788);
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/notification */ 63063);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31273);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/select */ 80517);
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/alert */ 48198);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/table */ 93134);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/divider */ 60021);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 16188);
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ 50174);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 29801);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/tag */ 92065);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 31236);
/* harmony import */ var ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/statistic */ 14021);
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ 3698);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/upload */ 74483);
/* harmony import */ var ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/transfer */ 76010);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/badge */ 23397);
/* harmony import */ var ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/comment */ 39527);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 28625);
/* harmony import */ var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/timeline */ 48010);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/card */ 72257);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-zorro-antd/list */ 70511);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 35174);
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ng-zorro-antd/popover */ 30897);
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ng-zorro-antd/steps */ 38676);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ng-zorro-antd/layout */ 78800);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ng-zorro-antd/switch */ 30445);
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ng-zorro-antd/pagination */ 12800);
/* harmony import */ var ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ng-zorro-antd/rate */ 26677);
/* harmony import */ var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ng-zorro-antd/result */ 17170);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 32920);
/* harmony import */ var ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ng-zorro-antd/auto-complete */ 38169);
/* harmony import */ var _g2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./g2 */ 7202);
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ngx-timeago */ 77258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





















































class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_5__.NzNotificationService, ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__.NzMessageService, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__.NzModalService, _services_tag_color_tag_color_service__WEBPACK_IMPORTED_MODULE_1__.TagColorService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_10__.NzAlertModule,
            ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableModule,
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__.NzInputModule,
            ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_13__.NzDropDownModule,
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__.NzButtonModule,
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__.NzIconModule,
            ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__.NzFormModule,
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_17__.NzSelectModule,
            ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_18__.NzRadioModule,
            ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_19__.NzDividerModule,
            ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_20__.NzDatePickerModule,
            ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_21__.NzTimePickerModule,
            ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_22__.NzTabsModule,
            ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_23__.NzTagModule,
            ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_24__.NzPageHeaderModule,
            ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_25__.NzStatisticModule,
            ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_26__.NzDescriptionsModule,
            ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_27__.NzUploadModule,
            ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_28__.NzTransferModule,
            ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_29__.NzBadgeModule,
            ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_30__.NzCommentModule,
            ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_31__.NzAvatarModule,
            ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_32__.NzEmptyModule,
            ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_33__.NzTimelineModule,
            ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_34__.NzCardModule,
            ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_35__.NzListModule,
            ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_36__.NzToolTipModule,
            ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_37__.NzPopconfirmModule,
            ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_38__.NzPopoverModule,
            ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_39__.NzStepsModule,
            ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_40__.NzInputNumberModule,
            ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_41__.NzCheckboxModule,
            _icons_provider_module__WEBPACK_IMPORTED_MODULE_0__.IconsProviderModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_42__.HttpClientModule,
            ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_43__.NzLayoutModule,
            ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_44__.NzGridModule,
            _angular_google_maps__WEBPACK_IMPORTED_MODULE_45__.GoogleMapsModule,
            ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_46__.NzSwitchModule,
            ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_47__.NzPaginationModule,
            ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_48__.NzRateModule,
            ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_49__.NzResultModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_50__.TranslateModule,
            _g2__WEBPACK_IMPORTED_MODULE_3__.NzG2Module,
            ngx_timeago__WEBPACK_IMPORTED_MODULE_51__.TimeagoModule,
            ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_52__.NzAutocompleteModule,
        ], _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_10__.NzAlertModule,
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableModule,
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__.NzInputModule,
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_13__.NzDropDownModule,
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__.NzButtonModule,
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__.NzIconModule,
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__.NzFormModule,
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_17__.NzSelectModule,
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_18__.NzRadioModule,
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_19__.NzDividerModule,
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_20__.NzDatePickerModule,
        ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_21__.NzTimePickerModule,
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_22__.NzTabsModule,
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_23__.NzTagModule,
        ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_24__.NzPageHeaderModule,
        ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_25__.NzStatisticModule,
        ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_26__.NzDescriptionsModule,
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_27__.NzUploadModule,
        ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_28__.NzTransferModule,
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_29__.NzBadgeModule,
        ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_30__.NzCommentModule,
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_31__.NzAvatarModule,
        ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_32__.NzEmptyModule,
        ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_33__.NzTimelineModule,
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_34__.NzCardModule,
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_35__.NzListModule,
        ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_37__.NzPopconfirmModule,
        ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_38__.NzPopoverModule,
        ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_39__.NzStepsModule,
        ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_40__.NzInputNumberModule,
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_41__.NzCheckboxModule,
        _icons_provider_module__WEBPACK_IMPORTED_MODULE_0__.IconsProviderModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_42__.HttpClientModule,
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_43__.NzLayoutModule,
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_44__.NzGridModule,
        _angular_google_maps__WEBPACK_IMPORTED_MODULE_45__.GoogleMapsModule,
        ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_46__.NzSwitchModule,
        ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_47__.NzPaginationModule,
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_36__.NzToolTipModule,
        ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_48__.NzRateModule,
        ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_49__.NzResultModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_50__.TranslateModule,
        _g2__WEBPACK_IMPORTED_MODULE_3__.NzG2Module,
        ngx_timeago__WEBPACK_IMPORTED_MODULE_51__.TimeagoModule,
        ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_52__.NzAutocompleteModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_2__.PhonePipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_10__.NzAlertModule,
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableModule,
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__.NzInputModule,
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_13__.NzDropDownModule,
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__.NzButtonModule,
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__.NzIconModule,
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__.NzFormModule,
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_17__.NzSelectModule,
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_18__.NzRadioModule,
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_19__.NzDividerModule,
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_20__.NzDatePickerModule,
        ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_21__.NzTimePickerModule,
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_22__.NzTabsModule,
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_23__.NzTagModule,
        ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_24__.NzPageHeaderModule,
        ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_25__.NzStatisticModule,
        ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_26__.NzDescriptionsModule,
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_27__.NzUploadModule,
        ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_28__.NzTransferModule,
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_29__.NzBadgeModule,
        ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_30__.NzCommentModule,
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_31__.NzAvatarModule,
        ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_32__.NzEmptyModule,
        ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_33__.NzTimelineModule,
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_34__.NzCardModule,
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_35__.NzListModule,
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_36__.NzToolTipModule,
        ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_37__.NzPopconfirmModule,
        ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_38__.NzPopoverModule,
        ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_39__.NzStepsModule,
        ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_40__.NzInputNumberModule,
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_41__.NzCheckboxModule,
        _icons_provider_module__WEBPACK_IMPORTED_MODULE_0__.IconsProviderModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_42__.HttpClientModule,
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_43__.NzLayoutModule,
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_44__.NzGridModule,
        _angular_google_maps__WEBPACK_IMPORTED_MODULE_45__.GoogleMapsModule,
        ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_46__.NzSwitchModule,
        ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_47__.NzPaginationModule,
        ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_48__.NzRateModule,
        ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_49__.NzResultModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_50__.TranslateModule,
        _g2__WEBPACK_IMPORTED_MODULE_3__.NzG2Module,
        ngx_timeago__WEBPACK_IMPORTED_MODULE_51__.TimeagoModule,
        ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_52__.NzAutocompleteModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_10__.NzAlertModule,
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableModule,
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__.NzInputModule,
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_13__.NzDropDownModule,
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__.NzButtonModule,
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__.NzIconModule,
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__.NzFormModule,
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_17__.NzSelectModule,
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_18__.NzRadioModule,
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_19__.NzDividerModule,
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_20__.NzDatePickerModule,
        ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_21__.NzTimePickerModule,
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_22__.NzTabsModule,
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_23__.NzTagModule,
        ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_24__.NzPageHeaderModule,
        ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_25__.NzStatisticModule,
        ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_26__.NzDescriptionsModule,
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_27__.NzUploadModule,
        ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_28__.NzTransferModule,
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_29__.NzBadgeModule,
        ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_30__.NzCommentModule,
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_31__.NzAvatarModule,
        ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_32__.NzEmptyModule,
        ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_33__.NzTimelineModule,
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_34__.NzCardModule,
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_35__.NzListModule,
        ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_37__.NzPopconfirmModule,
        ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_38__.NzPopoverModule,
        ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_39__.NzStepsModule,
        ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_40__.NzInputNumberModule,
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_41__.NzCheckboxModule,
        _icons_provider_module__WEBPACK_IMPORTED_MODULE_0__.IconsProviderModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_42__.HttpClientModule,
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_43__.NzLayoutModule,
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_44__.NzGridModule,
        _angular_google_maps__WEBPACK_IMPORTED_MODULE_45__.GoogleMapsModule,
        ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_46__.NzSwitchModule,
        _pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_2__.PhonePipe,
        ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_47__.NzPaginationModule,
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_36__.NzToolTipModule,
        ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_48__.NzRateModule,
        ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_49__.NzResultModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_50__.TranslateModule,
        _g2__WEBPACK_IMPORTED_MODULE_3__.NzG2Module,
        ngx_timeago__WEBPACK_IMPORTED_MODULE_51__.TimeagoModule,
        ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_52__.NzAutocompleteModule] }); })();


/***/ }),

/***/ 89437:
/*!****************************************!*\
  !*** ./src/app/@guards/login.guard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginGuard": () => (/* binding */ LoginGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);



class LoginGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        const token = localStorage.getItem("somi_admin_token");
        if (token != null) {
            return true;
        }
        else {
            this.router.navigate(["login"], {});
            return false;
        }
    }
}
LoginGuard.ɵfac = function LoginGuard_Factory(t) { return new (t || LoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
LoginGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginGuard, factory: LoginGuard.ɵfac, providedIn: "root" });


/***/ }),

/***/ 5390:
/*!**************************************!*\
  !*** ./src/app/@pipes/phone.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhonePipe": () => (/* binding */ PhonePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PhonePipe {
    transform(value, ...args) {
        var value = value.toString().trim().replace(/^\+/, '');
        // if (value.match(/[^0-9]/)) {
        //     return value;
        // }
        var country, city, number;
        switch (value.length) {
            case 10: // +1PPP####### -> C (PPP) ###-####
                country = 1;
                city = value.slice(0, 3);
                number = value.slice(3);
                break;
            case 11: // +CPPP####### -> CCC (PP) ###-####
                country = value[0];
                city = value.slice(1, 4);
                number = value.slice(4);
                break;
            case 12: // +CCCPP####### -> CCC (PP) ###-####
                country = value.slice(0, 3);
                city = value.slice(3, 5);
                number = value.slice(5);
                break;
            default:
                return value;
        }
        /*if (country == 1) {
            country = "";
        }*/
        number = number.slice(0, 3) + '-' + number.slice(3);
        return `+${country} (${city}) ${number}`;
    }
}
PhonePipe.ɵfac = function PhonePipe_Factory(t) { return new (t || PhonePipe)(); };
PhonePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "phone", type: PhonePipe, pure: true });


/***/ }),

/***/ 95233:
/*!**********************************************************!*\
  !*** ./src/app/@services/tag-color/tag-color.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagColorService": () => (/* binding */ TagColorService)
/* harmony export */ });
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class TagColorService {
    getTransactionStatusStatusColor(status) {
        switch (status) {
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.TransactionStatus.Processing:
                return "processing";
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.TransactionStatus.Canceled:
                return "warning";
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.TransactionStatus.Done:
                return "success";
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.TransactionStatus.Rejected:
                return "error";
        }
    }
    orderStatus(value) {
        switch (value) {
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.OrderStatus.Expired:
                return "default";
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.OrderStatus.RiderCanceled:
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.OrderStatus.DriverCanceled:
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.OrderStatus.NotFound:
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.OrderStatus.NoCloseFound:
                return "error";
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.OrderStatus.Booked:
                return "warning";
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.OrderStatus.Finished:
                return "success";
            default:
                return "processing";
        }
    }
    boolean(value) {
        return value ? "success" : "error";
    }
    driver(value) {
        switch (value) {
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.DriverStatus.Blocked:
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.DriverStatus.HardReject:
                return "error";
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.DriverStatus.Online:
                return "processing";
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.DriverStatus.InService:
                return "success";
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.DriverStatus.WaitingDocuments:
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.DriverStatus.SoftReject:
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.DriverStatus.Offline:
                return "default";
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.DriverStatus.PendingApproval:
                return "warning";
        }
    }
    rider(value) {
        switch (value) {
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RiderStatus.Disabled:
                return "error";
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.RiderStatus.Enabled:
                return "success";
        }
    }
    complaintStatus(status) {
        switch (status) {
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.ComplaintStatus.Resolved:
                return "success";
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.ComplaintStatus.Submitted:
                return "warning";
            case _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.ComplaintStatus.UnderInvestigation:
                return "processing";
        }
    }
}
TagColorService.ɵfac = function TagColorService_Factory(t) { return new (t || TagColorService)(); };
TagColorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TagColorService, factory: TagColorService.ɵfac });


/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _guards_login_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./@guards/login.guard */ 89437);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: 'login', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 80107)).then(m => m.LoginModule) },
    { path: 'config', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_config_config_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./config/config.module */ 94726)).then(m => m.ConfigModule) },
    { path: '', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cms_cms_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cms/cms.module */ 66789)).then(m => m.CMSModule), canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_0__.LoginGuard] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/locales/es */ 92403);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/i18n */ 14310);
/* harmony import */ var _cms_current_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cms/current-config.service */ 64653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);












class AppComponent {
    constructor(translate, i18n, currentConfigService, router) {
        var _a;
        this.translate = translate;
        this.i18n = i18n;
        this.currentConfigService = currentConfigService;
        this.router = router;
        this.isDarkMode = false;
        this.isCollapsed = false;
        translate.setDefaultLang("en");
        if (localStorage.getItem("lang") != null) {
            translate.use((_a = localStorage.getItem("lang")) !== null && _a !== void 0 ? _a : "en");
            switch (localStorage.getItem("lang")) {
                case "en":
                    this.i18n.setLocale(ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_2__.en_US);
                    break;
                case "es":
                    this.i18n.setLocale(ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_2__.es_ES);
                    (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.registerLocaleData)(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_0__["default"]);
                    break;
                case "fr":
                    this.i18n.setLocale(ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_2__.fr_FR);
                    break;
                case "de":
                    this.i18n.setLocale(ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_2__.de_DE);
                    break;
                case "ar":
                    this.i18n.setLocale(ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_2__.ar_EG);
                    break;
                case "hy":
                    this.i18n.setLocale(ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_2__.hy_AM);
                    break;
                case "ko":
                    this.i18n.setLocale(ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_2__.ko_KR);
                    break;
                case "ru":
                    this.i18n.setLocale(ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_2__.ru_RU);
                    break;
                case "zh":
                    this.i18n.setLocale(ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_2__.zh_CN);
                    break;
                case "ja":
                    this.i18n.setLocale(ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_2__.ja_JP);
                    break;
                case "pt":
                    this.i18n.setLocale(ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_2__.pt_PT);
                    break;
            }
        }
    }
    ngOnInit() {
        if (window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches) {
            //this.changeTheme();
        }
        this.loadConfiguration();
    }
    loadConfiguration() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const currentConfig = yield this.currentConfigService.getConfig();
            if (currentConfig.currentConfiguration.adminPanelAPIKey != null) {
                yield this.loadScript(`https://maps.googleapis.com/maps/api/js?key=${currentConfig.currentConfiguration.adminPanelAPIKey}&libraries=drawing,places`);
            }
            else if (currentConfig.currentConfiguration.firebaseProjectPrivateKey == null) {
                this.router.navigateByUrl("config");
            }
        });
    }
    loadScript(name) {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.src = name;
            document.getElementsByTagName("head")[0].appendChild(script);
            resolve();
        });
    }
    changeTheme() {
        // this.isDarkMode = !this.isDarkMode;
        // if (this.isDarkMode) {
        //   const head = document.head || document.getElementsByTagName('head')[0];
        //   const style = document.createElement('link');
        //   style.type = 'text/css';
        //   style.rel = 'stylesheet';
        //   style.id = 'dark-theme';
        //   style.href = '/theme.dark.css';
        //   head.appendChild(style);
        // } else {
        //   const dom = document.getElementById('dark-theme');
        //   if (dom) {
        //     dom.remove();
        //   }
        // }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_2__.NzI18nService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_cms_current_config_service__WEBPACK_IMPORTED_MODULE_1__.CurrentConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/locales/en */ 49137);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/service-worker */ 64933);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./@components/shared.module */ 45497);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ 75347);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/i18n */ 14310);
/* harmony import */ var _graphql_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./graphql.module */ 93756);
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-timeago */ 77258);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/icon */ 75869);
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ 90728);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! apollo-angular */ 89858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
























const icons = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__.UserOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__.ContainerOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__.CustomerServiceOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__.GlobalOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__.BulbOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__.NotificationOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__.BankOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__.CarOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__.FundOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__.ControlOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__.PlusOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__.DashboardOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__.MenuFoldOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__.MenuUnfoldOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__.LogoutOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__.ArrowLeftOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__.DeleteOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__.PictureTwoTone, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__.ExportOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__.InboxOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__.DownloadOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__.LockOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__.EyeInvisibleOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__.FieldTimeOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__.ScheduleOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__.FolderOpenOutline];
(0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.registerLocaleData)(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_2__["default"]);
// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__.TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
class AppModule {
    constructor(title, translator) {
        this.title = title;
        this.translator = translator;
        translator.get('branding.page.title').subscribe(x => {
            title.setTitle(x);
        });
    }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService)); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [
        { provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__.NZ_I18N, useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__.en_US }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            apollo_angular__WEBPACK_IMPORTED_MODULE_13__.ApolloModule,
            _components_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            _graphql_module__WEBPACK_IMPORTED_MODULE_5__.GraphQLModule,
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__.NzIconModule.forRoot(icons),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule.forRoot({
                defaultLanguage: 'en',
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient]
                }
            }),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__.ServiceWorkerModule.register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production }),
            ngx_timeago__WEBPACK_IMPORTED_MODULE_18__.TimeagoModule.forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        apollo_angular__WEBPACK_IMPORTED_MODULE_13__.ApolloModule,
        _components_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
        _graphql_module__WEBPACK_IMPORTED_MODULE_5__.GraphQLModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__.NzIconModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__.ServiceWorkerModule, ngx_timeago__WEBPACK_IMPORTED_MODULE_18__.TimeagoModule] }); })();


/***/ }),

/***/ 64653:
/*!***********************************************!*\
  !*** ./src/app/cms/current-config.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentConfigService": () => (/* binding */ CurrentConfigService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/generated/graphql */ 44362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class CurrentConfigService {
    constructor(currentConfigGql) {
        this.currentConfigGql = currentConfigGql;
    }
    getConfig() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (this.currentConfig != null) {
                return this.currentConfig;
            }
            this.currentConfig = (yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(this.currentConfigGql.fetch({}))).data;
            return this.currentConfig;
        });
    }
}
CurrentConfigService.ɵfac = function CurrentConfigService_Factory(t) { return new (t || CurrentConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ridy_admin_panel_generated_graphql__WEBPACK_IMPORTED_MODULE_0__.CurrentConfigurationGQL)); };
CurrentConfigService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CurrentConfigService, factory: CurrentConfigService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 93756:
/*!***********************************!*\
  !*** ./src/app/graphql.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphQLModule": () => (/* binding */ GraphQLModule),
/* harmony export */   "createApollo": () => (/* binding */ createApollo)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-angular */ 89858);
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client/core */ 14000);
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client/core */ 73927);
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client/core */ 27156);
/* harmony import */ var apollo_angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! apollo-angular/http */ 67720);
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/link/context */ 14765);
/* harmony import */ var _ridy_admin_panel_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ridy/admin-panel/src/environments/environment */ 92340);
/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client/utilities */ 36699);
/* harmony import */ var _apollo_client_link_ws__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client/link/ws */ 14057);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);








function createApollo(httpLink) {
    const http = httpLink.create({
        uri: `${_ridy_admin_panel_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.root}graphql`,
    });
    const wsLink = new _apollo_client_link_ws__WEBPACK_IMPORTED_MODULE_1__.WebSocketLink({
        uri: _ridy_admin_panel_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.wsEndpoint,
        options: {
            reconnect: true,
            connectionParams: {
                authToken: localStorage.getItem("somi_admin_token"),
            },
        },
    });
    const basic = (0,_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2__.setContext)(() => ({
        headers: {
            Accept: "charset=utf-8",
        },
    }));
    const auth = (0,_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2__.setContext)(() => {
        return {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("somi_admin_token")}`,
            },
        };
    });
    const defaultOptions = {
        watchQuery: {
            fetchPolicy: "no-cache",
            //errorPolicy: 'ignore',
        },
        query: {
            fetchPolicy: "no-cache",
            //errorPolicy: 'all',
        },
    };
    const link = _apollo_client_core__WEBPACK_IMPORTED_MODULE_3__.ApolloLink.from([basic, auth, http]);
    const splitLink = (0,_apollo_client_core__WEBPACK_IMPORTED_MODULE_4__.split)(({ query }) => {
        const definition = (0,_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_5__.getMainDefinition)(query);
        return (definition.kind === "OperationDefinition" &&
            definition.operation === "subscription");
    }, wsLink, link);
    return {
        cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_6__.InMemoryCache({
            addTypename: false,
        }),
        link: splitLink,
        defaultOptions,
    };
}
class GraphQLModule {
}
GraphQLModule.ɵfac = function GraphQLModule_Factory(t) { return new (t || GraphQLModule)(); };
GraphQLModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: GraphQLModule });
GraphQLModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
        {
            provide: apollo_angular__WEBPACK_IMPORTED_MODULE_8__.APOLLO_OPTIONS,
            useFactory: createApollo,
            deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_9__.HttpLink],
        },
    ] });


/***/ }),

/***/ 21210:
/*!******************************************!*\
  !*** ./src/app/icons-provider.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconsProviderModule": () => (/* binding */ IconsProviderModule)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ 75869);
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ 90728);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



const icons = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__.MenuFoldOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__.MenuUnfoldOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__.DashboardOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__.FormOutline];
class IconsProviderModule {
}
IconsProviderModule.ɵfac = function IconsProviderModule_Factory(t) { return new (t || IconsProviderModule)(); };
IconsProviderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: IconsProviderModule });
IconsProviderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
        { provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NZ_ICONS, useValue: icons }
    ] });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    root: "http://api.somi.co.za:4001/",
    wsEndpoint: "ws://api.somi.co.za:4001/graphql",
    // root: 'https://demo-admin.somi.co.za:4001/',
    // wsEndpoint: 'wss://demo-admin.somi.co.za:4001/graphql',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map