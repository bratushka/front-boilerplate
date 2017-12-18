export function formErrorAdapter(errors) {
  const generalErrors = [];
  if (errors['non_field_errors']) {
    errors['non_field_errors'].forEach(error => generalErrors.push(error));
  }
  if (errors['detail']) {
    generalErrors.push(errors['detail']);
  }

  const result =  { ...errors };
  if (generalErrors.length !== 0) result['_error'] = generalErrors;

  return result;
}
