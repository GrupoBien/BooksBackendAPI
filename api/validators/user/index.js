import postValidator from './post.validator.js';
import getValidator from './get.validator.js';
import deleteValidator from './delete.validator.js';
import updateValidator from './put.validator.js';

export default {
    get: getValidator,
    post: postValidator,
    delete: deleteValidator,
    put: updateValidator
};
