import moment from 'moment';

export const JobsService = function (DataStorageService) {
    'ngInject';

    this.getAll = () => DataStorageService.getAll();

    this.add = (data) => {
        const id = moment().format();

        DataStorageService.set(id, data)
    };

    this.model = () => {
        return {
            title: '',
            company: '',
            salaryMin: 0,
            salaryMax: 0,
            city: '',
            street: '',
            postalCode: ''
        }
    }
};