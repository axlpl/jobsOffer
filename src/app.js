import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMessages from 'angular-messages';
import Components from './components/components';
import { HomeComponent } from './home/home.component';
import { JobOfferAddComponent } from './job-offer-add/job-offer-add.component';
import {
    JobsService,
    DataStorageService,
} from './services';

angular.module('myApp', [
    uiRouter,
    ngMessages,
    Components
  ])
  .component('homePage', HomeComponent)
  .component('addPage', JobOfferAddComponent)
  .service('JobsService', JobsService)
  .service('DataStorageService', DataStorageService)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('home', {
        url: '',
        template: '<home-page jobs-list="$resolve.jobsList"></home-page>',
        resolve: {
          jobsList: (JobsService) => {
            'ngInject';

            return JobsService.getAll();
          }
        }
      })
      .state('add', {
        url: '/add',
        template: '<add-page></add-page>'
      });
  });
