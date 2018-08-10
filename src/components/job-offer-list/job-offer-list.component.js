import template from './job-offer-list.component.html';
import controller from './job-offer-list.controller';
import './job-offer-list.component.scss';

export const JobOfferListComponent = {
    bindings: {
        jobsList: '<',
    },
    template,
    controller
};
