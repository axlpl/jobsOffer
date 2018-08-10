import angular from 'angular';
import { JobOfferListComponent } from './job-offer-list/job-offer-list.component';

export default angular.module('app.components', [])
.component('jobOfferList', JobOfferListComponent)
.name;
