/*
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://github.com/OpenAPITools/openapi-generator
 *
 * OpenAPI generator version: 6.0.1-SNAPSHOT
 */


import http from "k6/http";
import { group, check, sleep } from "k6";

const BASE_URL = "http://145.108.225.7:14322";
// Sleep duration between successive requests.
// You might want to edit the value of this variable or remove calls to the sleep function on the script.
const SLEEP_DURATION = 0.1;
// Global variables should be initialized.
const TS_AUTH_SERVICE_URL = "http://145.108.225.7:12340";
const USERNAME = 'admin';
const PASSWORD = '222222';

export function setup() {
    // authenticate via a Bearer token
    let params = {headers: {"Content-Type": "application/json", "Accept": "*/*"}};
    let body = {"username": USERNAME, "password": PASSWORD};
    const loginRes = http.post(`${TS_AUTH_SERVICE_URL}/api/v1/users/login`, JSON.stringify(body), params);

    const authToken = loginRes.json('data')["token"];
    check(authToken, { 'Logged in successfully': () => authToken !== '' });

    return authToken;
}

export default function(authToken) {
    let params = {headers: {"Authorization": `Bearer ${authToken}`, "Content-Type": "application/json", "Accept": "*/*"}};
    
    group("/api/v1/travelplanservice/welcome", () => {

        // Request No. 1
        {
            let url = BASE_URL + `/api/v1/travelplanservice/welcome`;
            let request = http.get(url, params);

            check(request, {
                "GET OK": (r) => r.status === 200
            });
        }
    });

    group("/api/v1/travelplanservice/travelPlan/transferResult", () => {

        // Request No. 1
        {
            let url = BASE_URL + `/api/v1/travelplanservice/travelPlan/transferResult`;
            let body = {
                "fromStationName": "string",
                "toStationName": "string",
                "trainType": "string",
                "travelDate": 1501257600000,
                "viaStationName": "string"
            };
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "POST OK": (r) => r.status === 200
            });
        }
    });

    group("/api/v1/travelplanservice/travelPlan/quickest", () => {

        // Request No. 1
        {
            let url = BASE_URL + `/api/v1/travelplanservice/travelPlan/quickest`;
            let body = {
                "startingPlace": "Nan Jing",
                "endPlace": "Shang Hai",
                "departureTime": "2022-06-28"
            }
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "POST OK": (r) => r.status === 200
            });
        }
    });

    group("/api/v1/travelplanservice/travelPlan/cheapest", () => {

        // Request No. 1
        {
            let url = BASE_URL + `/api/v1/travelplanservice/travelPlan/cheapest`;
            let body = {
                "startingPlace": "Nan Jing",
                "endPlace": "Shang Hai",
                "departureTime": "2022-06-28"
            }
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "POST OK": (r) => r.status === 200
            });
        }
    });
    
    group("/api/v1/travelplanservice/travelPlan/minStation", () => {

        // Request No. 1
        {
            let url = BASE_URL + `/api/v1/travelplanservice/travelPlan/minStation`;
            let body = {
                "startingPlace": "Nan Jing",
                "endPlace": "Shang Hai",
                "departureTime": "2022-06-28"
            }
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "POST OK": (r) => r.status === 200
            });
        }
    });
}