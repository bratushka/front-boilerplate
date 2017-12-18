import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import localStorage from 'mock-local-storage';


axios.defaults.adapter = httpAdapter;
global.window.localstorage = localStorage;
