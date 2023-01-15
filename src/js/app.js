import * as functions from "./modules/functions.js";
import { Validation } from './modules/validation.js';

functions.isWebp();

const _validation = new Validation();

let form = document.querySelector('form');
let params = {
    rules: {
        name: {
            required: true
        },
        email: {
            required: true
        }
    }
};

_validation.check(form, params);