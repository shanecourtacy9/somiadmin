(self.webpackChunksomiadmin=self.webpackChunksomiadmin||[]).push([[179],{4362:(gn,at,v)=>{"use strict";v.d(at,{$m4:()=>zt,$x7:()=>Rr,Ae5:()=>It,B4c:()=>ti,BEG:()=>Be,Bho:()=>tn,CAA:()=>gi,CL7:()=>Qt,CQf:()=>an,Crj:()=>wi,Do1:()=>R,Dog:()=>P,Dy5:()=>ur,E2S:()=>pt,FH4:()=>ki,FLW:()=>kn,Fp1:()=>Sr,Ii4:()=>ni,JG9:()=>Oe,JQL:()=>qe,JZ:()=>Si,K$m:()=>ze,KW0:()=>_e,KXg:()=>mi,LK1:()=>Dr,LND:()=>Xe,LPf:()=>oi,MsJ:()=>Lt,NS3:()=>Ti,Nh5:()=>Vn,OB9:()=>qn,Ol1:()=>Hi,P5X:()=>U,PHj:()=>An,Pgq:()=>Gn,Q8e:()=>ue,R9J:()=>lr,REG:()=>W,RWY:()=>We,Rsx:()=>lt,Sf3:()=>ho,Syb:()=>Tt,T8B:()=>hr,TFb:()=>B,UFo:()=>fa,Ue1:()=>Bt,Uhd:()=>mo,VJo:()=>E,VU2:()=>Ae,Vqu:()=>Cn,VyS:()=>jr,WJJ:()=>ei,XFx:()=>nr,Y$5:()=>Mi,Y0t:()=>ee,YM8:()=>Rt,YS$:()=>ln,ZNc:()=>sr,Zdg:()=>Fn,ZfQ:()=>Nn,_bY:()=>$e,aEb:()=>O,b4s:()=>nt,bqW:()=>Ur,ckV:()=>bt,cv:()=>ct,cws:()=>Nr,d4l:()=>Ft,eDJ:()=>Hn,eew:()=>Vt,eqc:()=>Eo,fK_:()=>Or,gZs:()=>Zi,gj6:()=>Sn,gqb:()=>J,h0b:()=>di,hQu:()=>un,hTS:()=>Co,hW4:()=>Ee,hyv:()=>Ha,iFo:()=>V,iRv:()=>ht,iaw:()=>jt,ifc:()=>dr,k8H:()=>tr,kd6:()=>rr,lIR:()=>Kt,lS0:()=>Yn,mei:()=>Oo,mrw:()=>Ue,n6r:()=>Ei,nAg:()=>ke,nRb:()=>En,ngZ:()=>Vi,nr6:()=>rn,nr7:()=>Tn,oGR:()=>to,oMj:()=>Ce,q$b:()=>Oi,q0r:()=>ro,rL6:()=>Me,s6P:()=>fo,sAp:()=>nn,sfd:()=>eo,smv:()=>fr,sp4:()=>$t,tM1:()=>ce,tdB:()=>Ye,tpO:()=>xr,uSm:()=>zo,v1o:()=>si,vC$:()=>Bn,vYB:()=>$n,vab:()=>wr,vzA:()=>se,w$I:()=>Je,wnc:()=>q,xzO:()=>ft});var a=v(33),f=v(5e3),R=(()=>{return(k=R||(R={})).Daily="Daily",k.Monthly="Monthly",k.Weekly="Weekly",k.Yearly="Yearly",R;var k})(),U=(()=>{return(k=U||(U={})).Resolved="Resolved",k.Submitted="Submitted",k.UnderInvestigation="UnderInvestigation",U;var k})(),B=(()=>{return(k=B||(B={})).Commission="Commission",k.Correction="Correction",k.Withdraw="Withdraw",B;var k})(),ue=(()=>{return(k=ue||(ue={})).BankTransfer="BankTransfer",k.Gift="Gift",k.InAppPayment="InAppPayment",k.OrderFee="OrderFee",ue;var k})(),ze=(()=>{return(k=ze||(ze={})).Blocked="Blocked",k.HardReject="HardReject",k.InService="InService",k.Offline="Offline",k.Online="Online",k.PendingApproval="PendingApproval",k.SoftReject="SoftReject",k.WaitingDocuments="WaitingDocuments",ze;var k})(),$e=(()=>{return(k=$e||($e={})).DriverWallet="DriverWallet",k.FleetWallet="FleetWallet",k.ProviderWallet="ProviderWallet",k.RiderWallet="RiderWallet",$e;var k})(),ce=(()=>((ce||(ce={})).Csv="CSV",ce))(),ee=(()=>{return(k=ee||(ee={})).Female="Female",k.Male="Male",k.Unknown="Unknown",ee;var k})(),Ce=(()=>{return(k=Ce||(Ce={})).AnnouncementsEdit="Announcements_Edit",k.AnnouncementsView="Announcements_View",k.CarsEdit="Cars_Edit",k.CarsView="Cars_View",k.ComplaintsEdit="Complaints_Edit",k.ComplaintsView="Complaints_View",k.CouponsEdit="Coupons_Edit",k.CouponsView="Coupons_View",k.DriverWalletEdit="DriverWallet_Edit",k.DriverWalletView="DriverWallet_View",k.DriversEdit="Drivers_Edit",k.DriversView="Drivers_View",k.FleetWalletEdit="FleetWallet_Edit",k.FleetWalletView="FleetWallet_View",k.FleetsEdit="Fleets_Edit",k.FleetsView="Fleets_View",k.GatewaysEdit="Gateways_Edit",k.GatewaysView="Gateways_View",k.ProviderWalletEdit="ProviderWallet_Edit",k.ProviderWalletView="ProviderWallet_View",k.RegionsEdit="Regions_Edit",k.RegionsView="Regions_View",k.RequestsView="Requests_View",k.RiderWalletEdit="RiderWallet_Edit",k.RiderWalletView="RiderWallet_View",k.RidersEdit="Riders_Edit",k.RidersView="Riders_View",k.ServicesEdit="Services_Edit",k.ServicesView="Services_View",k.UsersEdit="Users_Edit",k.UsersView="Users_View",Ce;var k})(),V=(()=>{return(k=V||(V={})).Arrived="Arrived",k.Booked="Booked",k.DriverAccepted="DriverAccepted",k.DriverCanceled="DriverCanceled",k.Expired="Expired",k.Finished="Finished",k.Found="Found",k.NoCloseFound="NoCloseFound",k.NotFound="NotFound",k.Requested="Requested",k.RiderCanceled="RiderCanceled",k.Started="Started",k.WaitingForPostPay="WaitingForPostPay",k.WaitingForPrePay="WaitingForPrePay",k.WaitingForReview="WaitingForReview",V;var k})(),se=(()=>{return(k=se||(se={})).AmazonPaymentServices="AmazonPaymentServices",k.BrainTree="BrainTree",k.CustomLink="CustomLink",k.Flutterwave="Flutterwave",k.Instamojo="Instamojo",k.Mips="MIPS",k.MercadoPago="MercadoPago",k.MyTMoney="MyTMoney",k.PayGate="PayGate",k.PayPal="PayPal",k.PayU="PayU",k.Paystack="Paystack",k.Paytm="Paytm",k.Razorpay="Razorpay",k.Stripe="Stripe",k.WayForPay="WayForPay",se;var k})(),nt=(()=>((nt||(nt={})).Withdraw="Withdraw",nt))(),zt=(()=>((zt||(zt={})).Commission="Commission",zt))(),Ue=(()=>{return(k=Ue||(Ue={})).ArrivedToDestination="ArrivedToDestination",k.ArrivedToPickupPoint="ArrivedToPickupPoint",k.BookedByOperator="BookedByOperator",k.BookedByRider="BookedByRider",k.CanceledByDriver="CanceledByDriver",k.CanceledByOperator="CanceledByOperator",k.CanceledByRider="CanceledByRider",k.DriverAccepted="DriverAccepted",k.Expired="Expired",k.Paid="Paid",k.RequestedByOperator="RequestedByOperator",k.RequestedByRider="RequestedByRider",k.Reviewed="Reviewed",k.Started="Started",Ue;var k})(),ht=(()=>{return(k=ht||(ht={})).Correction="Correction",k.OrderFee="OrderFee",k.Withdraw="Withdraw",ht;var k})(),Vt=(()=>{return(k=Vt||(Vt={})).BankTransfer="BankTransfer",k.Correction="Correction",k.Gift="Gift",k.InAppPayment="InAppPayment",Vt;var k})(),Gn=(()=>{return(k=Gn||(Gn={})).Disabled="Disabled",k.Enabled="Enabled",Gn;var k})(),Ae=(()=>{return(k=Ae||(Ae={})).CashCredit="CashCredit",k.OnlyCash="OnlyCash",k.OnlyCredit="OnlyCredit",Ae;var k})(),Xe=(()=>{return(k=Xe||(Xe={})).Canceled="Canceled",k.Done="Done",k.Processing="Processing",k.Rejected="Rejected",Xe;var k})(),Tt=(()=>{return(k=Tt||(Tt={})).Invalid="INVALID",k.Ok="OK",Tt;var k})(),ft=(()=>{return(k=ft||(ft={})).ClientFound="CLIENT_FOUND",k.Invalid="INVALID",k.Ok="OK",k.Overused="OVERUSED",ft;var k})();const kt=a.Ps`
    fragment DriverOverviewInfo on Driver {
  id
  firstName
  lastName
  mobileNumber
  status
}
    `,Xt=a.Ps`
    fragment DriverLocation on OnlineDriver {
  location {
    lat
    lng
  }
  driverId
  lastUpdatedAt
}
    `,Yt=a.Ps`
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
    `;let $t=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=Yt}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Pn=a.Ps`
    mutation UpdateComplaintStatus($id: ID!, $status: ComplaintStatus!) {
  updateOneComplaint(input: {id: $id, update: {status: $status}}) {
    id
  }
}
    `;let kn=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=Pn}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const ui=a.Ps`
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
    `;let nn=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=ui}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const fn=a.Ps`
    mutation CreateDriver($input: CreateDriver!) {
  createOneDriver(input: {driver: $input}) {
    id
  }
}
    `;let It=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=fn}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const At=a.Ps`
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
    `;let oi=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=At}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const qt=a.Ps`
    mutation UpdateDriverProfile($id: ID!, $update: UpdateDriverInput!, $serviceIds: [ID!]!) {
  updateOneDriver(input: {id: $id, update: $update}) {
    id
  }
  setEnabledServicesOnDriver(input: {id: $id, relationIds: $serviceIds}) {
    id
  }
}
    `;let Qt=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=qt}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Ht=a.Ps`
    mutation UpdateDriverStatus($id: ID!, $status: DriverStatus) {
  updateOneDriver(input: {id: $id, update: {status: $status}}) {
    id
  }
}
    `;let un=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=Ht}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const xn=a.Ps`
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
    `;let Fn=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=xn}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Pi=a.Ps`
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
    `;let ki=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=Pi}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Ri=a.Ps`
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
    `;let tn=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=Ri}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Kn=a.Ps`
    mutation CreateDriverTransaction($input: DriverTransactionInput!) {
  createDriverTransaction(input: $input) {
    id
  }
}
    `;let ke=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=Kn}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const me=a.Ps`
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
    `;let We=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=me}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const le=a.Ps`
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
    `;let Me=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=le}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const be=a.Ps`
    query Export($input: ExportArgs!) {
  export(input: $input) {
    url
  }
}
    `;let J=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=be}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const it=a.Ps`
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
    `;let Kt=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=it}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Rn=a.Ps`
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
    `;let Bn=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=Rn}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const on=a.Ps`
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
    `;let $n=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=on}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const xt=a.Ps`
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
    `;let Cn=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=xt}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const mn=a.Ps`
    mutation CreateOrder($riderId: ID!, $points: [PointInput!]!, $addresses: [String!]!, $serviceId: ID!) {
  createOrder(
    input: {points: $points, serviceId: $serviceId, addresses: $addresses, intervalMinutes: 0, riderId: $riderId}
  ) {
    id
  }
}
    `;let Tn=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=mn}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const pi=a.Ps`
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
    `;let Sn=(()=>{class k extends a.w0{constructor(_t){super(_t),this.document=pi}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const vi=a.Ps`
    mutation CancelOrder($orderId: ID!) {
  cancelOrder(orderId: $orderId) {
    id
    status
  }
}
    `;let gi=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=vi}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const ai=a.Ps`
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
    ${Xt}
${kt}`;let Oi=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=ai}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Fi=a.Ps`
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
    ${kt}`;let Si=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=Fi}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Li=a.Ps`
    query RequestsChart($timeframe: ChartTimeframe!) {
  requestChart(timeframe: $timeframe) {
    items {
      time
      count
      status
    }
  }
}
    `;let Or=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=Li}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const vr=a.Ps`
    query IncomeChart($timeframe: ChartTimeframe!) {
  incomeChart(timeframe: $timeframe) {
    items {
      time
      sum
      currency
    }
  }
}
    `;let En=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=vr}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const li=a.Ps`
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
    `;let rn=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=li}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const _i=a.Ps`
    mutation DeleteCarModel($id: ID!) {
  deleteOneCarModel(input: {id: $id}) {
    id
  }
}
    `;let pt=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=_i}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Ot=a.Ps`
    mutation DeleteCarColor($id: ID!) {
  deleteOneCarColor(input: {id: $id}) {
    id
  }
}
    `;let lt=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=Ot}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const yn=a.Ps`
    mutation CreateCarModel($input: CreateCarModel!) {
  createOneCarModel(input: {carModel: $input}) {
    id
  }
}
    `;let Hn=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=yn}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Zn=a.Ps`
    mutation CreateCarColor($input: CreateCarColor!) {
  createOneCarColor(input: {carColor: $input}) {
    id
  }
}
    `;let di=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=Zn}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Di=a.Ps`
    mutation UpdateCarModel($id: ID!, $input: UpdateCarModel!) {
  updateOneCarModel(input: {id: $id, update: $input}) {
    id
  }
}
    `;let Hi=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=Di}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Cr=a.Ps`
    mutation UpdateCarColor($id: ID!, $input: UpdateCarColor!) {
  updateOneCarColor(input: {id: $id, update: $input}) {
    id
  }
}
    `;let dr=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=Cr}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Pr=a.Ps`
    mutation CreateFleet($input: CreateFleet!) {
  createOneFleet(input: {fleet: $input}) {
    id
  }
}
    `;let Nr=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=Pr}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const qr=a.Ps`
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
    `;let wr=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=qr}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const ao=a.Ps`
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
    `;let Dr=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=ao}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();a.Ps`
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
    `;const Gr=a.Ps`
    mutation UpdateFleet($id: ID!, $update: UpdateFleet!) {
  updateOneFleet(input: {id: $id, update: $update}) {
    id
  }
}
    `;let ro=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=Gr}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const _o=a.Ps`
    mutation CreateFleetTransaction($input: FleetTransactionInput!) {
  createFleetTransaction(input: $input) {
    id
  }
}
    `;let jt=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=_o}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const On=a.Ps`
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
    `;let Ye=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=On}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Pt=a.Ps`
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
    `;let Nn=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=Pt}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const ii=a.Ps`
    mutation CreatePaymentGateway($input: CreatePaymentGateway!) {
  createOnePaymentGateway(input: {paymentGateway: $input}) {
    id
  }
}
    `;let Ei=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=ii}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Ui=a.Ps`
    mutation UpdatePaymentGateway($id: ID!, $input: UpdatePaymentGateway!) {
  updateOnePaymentGateway(input: {id: $id, update: $input}) {
    id
  }
}
    `;let Mi=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=Ui}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Er=a.Ps`
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
    `;let ur=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=Er}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const $i=a.Ps`
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
    `;let bt=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=$i}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const je=a.Ps`
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
    `;let Be=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=je}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const et=a.Ps`
    mutation UpdateRegion($id: ID!, $update: UpdateRegion!) {
  updateOneRegion(input: {id: $id, update: $update}) {
    id
  }
}
    `;let Ft=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=et}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Zt=a.Ps`
    mutation CreateRegion($input: CreateRegion!) {
  createOneRegion(input: {region: $input}) {
    id
  }
}
    `;let an=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=Zt}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Un=a.Ps`
    query ReviewParameterView($id: ID!) {
  feedbackParameter(id: $id) {
    id
    title
    isGood
  }
}
    `;let ti=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=Un}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const jn=a.Ps`
    mutation UpdateReviewParameter($id: ID!, $update: UpdateFeedbackParameter!) {
  updateOneFeedbackParameter(input: {id: $id, update: $update}) {
    id
  }
}
    `;let si=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=jn}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const ci=a.Ps`
    mutation CreateReviewParameter($input: CreateFeedbackParameter!) {
  createOneFeedbackParameter(input: {feedbackParameter: $input}) {
    id
  }
}
    `;let mi=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=ci}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const bi=a.Ps`
    query ReviewParametersList {
  feedbackParameters {
    id
    title
    isGood
  }
}
    `;let wi=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=bi}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Ki=a.Ps`
    query Roles {
  operatorRoles {
    id
    title
  }
}
    `;let tr=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=Ki}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const zr=a.Ps`
    query Role($id: ID!) {
  operatorRole(id: $id) {
    id
    title
    permissions
  }
}
    `;let ei=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=zr}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Ji=a.Ps`
    mutation CreateRole($input: CreateOperatorRole!) {
  createOneOperatorRole(input: {operatorRole: $input}) {
    id
    title
    permissions
  }
}
    `;let xr=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=Ji}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Xi=a.Ps`
    mutation UpdateRole($id: ID!, $input: UpdateOperatorRole!) {
  updateOneOperatorRole(input: {id: $id, update: $input}) {
    id
  }
}
    `;let Oe=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=Xi}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const yt=a.Ps`
    query ViewServiceCategory($id: ID!) {
  serviceCategory(id: $id) {
    id
    name
  }
}
    `;let Ee=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=yt}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const wt=a.Ps`
    mutation CreateServiceCategory($input: CreateServiceCategory!) {
  createOneServiceCategory(input: {serviceCategory: $input}) {
    id
  }
}
    `;let W=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=wt}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const x=a.Ps`
    mutation UpdateServiceCategory($id: ID!, $input: UpdateServiceCategory!) {
  updateOneServiceCategory(input: {id: $id, update: $input}) {
    id
  }
}
    `;let E=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=x}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const _=a.Ps`
    mutation DeleteServiceCategory($id: ID!) {
  deleteOneServiceCategory(input: {id: $id}) {
    id
  }
}
    `;let O=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=_}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const re=a.Ps`
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
    `;let qe=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=re}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Dt=a.Ps`
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
    `;let Rt=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=Dt}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const gt=a.Ps`
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
    `;let Vn=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=gt}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const ge=a.Ps`
    mutation CreateService($input: CreateService!) {
  createOneService(input: {service: $input}) {
    id
  }
}
    `;let q=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=ge}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const H=a.Ps`
    mutation UpdateService($id: ID!, $input: UpdateService!) {
  updateOneService(input: {id: $id, update: $input}) {
    id
  }
}
    `;let ct=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=H}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const dn=a.Ps`
    mutation SetRegionsOnService($id: ID!, $relationIds: [ID!]!) {
  setRegionsOnService(input: {id: $id, relationIds: $relationIds}) {
    id
  }
}
    `;let qn=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=dn}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const yi=a.Ps`
    mutation UpdatePassword($input: UpdatePasswordInput!) {
  updatePassword(input: $input) {
    id
  }
}
    `;let sr=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=yi}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Wi=a.Ps`
    mutation CreateOperator($input: CreateOperatorInput!) {
  createOneOperator(input: {operator: $input}) {
    id
  }
}
    `;let fr=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=Wi}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Qn=a.Ps`
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
    `;let Vi=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=Qn}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Kr=a.Ps`
    query NewOperator {
  operatorRoles {
    id
    title
  }
}
    `;let Sr=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=Kr}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const yr=a.Ps`
    mutation UpdateOperator($id: ID!, $update: UpdateOperator!) {
  updateOneOperator(input: {id: $id, update: $update}) {
    id
  }
}
    `;let ni=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=yr}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const _r=a.Ps`
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
    `;let Eo=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=_r}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const he=a.Ps`
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
    `;let Je=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=he}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const De=a.Ps`
    mutation CreateAnnouncement($input: CreateAnnouncement!) {
  createOneAnnouncement(input: {announcement: $input}) {
    id
  }
}
    `;let Lt=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=De}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const cn=a.Ps`
    mutation UpdateAnnouncement($id: ID!, $input: UpdateAnnouncement!) {
  updateOneAnnouncement(input: {id: $id, update: $input}) {
    id
  }
}
    `;let An=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=cn}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Ci=a.Ps`
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
    `;let lr=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=Ci}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const rt=a.Ps`
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
    `;let P=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=rt}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const F=a.Ps`
    mutation CreateCoupon($input: CreateCoupon!) {
  createOneCoupon(input: {coupon: $input}) {
    id
  }
}
    `;let _e=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=F}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const mt=a.Ps`
    mutation UpdateCoupon($id: ID!, $input: UpdateCoupon!) {
  updateOneCoupon(input: {id: $id, update: $input}) {
    id
  }
}
    `;let Bt=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=mt}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const sn=a.Ps`
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
    `;let ln=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=sn}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const In=a.Ps`
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
    `;let Yn=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=In}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const fi=a.Ps`
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
    `;let Ti=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=fi}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Gi=a.Ps`
    mutation AssignDriverToOrder($orderId: ID!, $driverId: ID!) {
  assignDriverToOrder(orderId: $orderId, driverId: $driverId) {
    id
  }
}
    `;let nr=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=Gi}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Qi=a.Ps`
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
    `;let rr=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=Qi}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Mr=a.Ps`
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
    `;let Ur=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=Mr}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Jr=a.Ps`
    mutation CreateRider($input: CreateRider!) {
  createOneRider(input: {rider: $input}) {
    id
    firstName
    lastName
    mobileNumber
    gender
  }
}
    `;let eo=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=Jr}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const pr=a.Ps`
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
    `;let to=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=pr}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const br=a.Ps`
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
    `;let Rr=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=br}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const kr=a.Ps`
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
    `;let jr=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=kr}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const $r=a.Ps`
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
    `;let Co=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=$r}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Vo=a.Ps`
    mutation UpdateRider($id: ID!, $update: UpdateRider!) {
  updateOneRider(input: {id: $id, update: $update}) {
    id
  }
}
    `;let ho=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=Vo}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const jo=a.Ps`
    mutation CreateRiderTransaction($input: RiderTransactionInput!) {
  createRiderTransaction(input: $input) {
    id
  }
}
    `;let fa=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=jo}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Bi=a.Ps`
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
    `;let Zi=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=Bi}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const qi=a.Ps`
    query CurrentConfiguration {
  currentConfiguration {
    purchaseCode
    backendMapsAPIKey
    adminPanelAPIKey
    firebaseProjectPrivateKey
  }
}
    `;let hr=(()=>{class k extends a.AE{constructor(_t){super(_t),this.document=qi}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Qr=a.Ps`
    mutation UpdatePurchaseCode($code: String!) {
  updatePurchaseCode(purchaseCode: $code) {
    status
    clients {
      ip
    }
  }
}
    `;let fo=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=Qr}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const no=a.Ps`
    mutation UpdateMapsAPIKey($backend: String!, $adminPanel: String!) {
  updateMapsAPIKey(backend: $backend, adminPanel: $adminPanel) {
    status
    message
  }
}
    `;let mo=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=no}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const Wr=a.Ps`
    mutation UpdateFirebase($keyFileName: String!) {
  updateFirebase(keyFileName: $keyFileName) {
    status
    message
  }
}
    `;let Ha=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=Wr}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const as=a.Ps`
    mutation DisableServer($ip: String!) {
  disablePreviousServer(ip: $ip) {
    status
    message
  }
}
    `;let zo=(()=>{class k extends a.mm{constructor(_t){super(_t),this.document=as}}return k.\u0275fac=function(_t){return new(_t||k)(f.LFG(a._M))},k.\u0275prov=f.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const qo=a.Ps`
    query Login($username: String!, $password: String!) {
  login(userName: $username, password: $password) {
    token
  }
}