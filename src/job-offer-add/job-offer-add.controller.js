export default function JobOfferAddController(JobsService) {
  'ngInject';

  this.hasClickedOnSubmit = false;
  this.isAdded = false;
  this.save = save.bind(this);
  this.hasError = hasError.bind(this);
  this.model = JobsService.model();

  function save(valid) {
    this.hasClickedOnSubmit = true;

    if (valid && !this.isSaving && this.model.salaryMin > 0) {
      JobsService.add(this.model);
      this.model = JobsService.model();
      this.hasClickedOnSubmit = false;
      this.isAdded = true;
    }
  }

  function hasError(name, form, hasClickedOnSubmit) {
    if (!form[name]) return;

    return form[name].$error &&
      form[name].$invalid &&
      (form.$submitted || form[name].$touched || hasClickedOnSubmit);
  }
}
