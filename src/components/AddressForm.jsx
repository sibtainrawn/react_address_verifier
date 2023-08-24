import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";

export default function AddressForm() {
  const [validatedAddress, setValidatedAddress] = useState({});
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip5, setZip5] = useState("");
  const [error, setError] = useState("");

  const [address1Error, setAddress1Error] = useState("");
  const [cityError, setCityError] = useState("");
  const [stateError, setStateError] = useState("");
  const [zip5Error, setZip5Error] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setAddress1Error("");
    setCityError("");
    setStateError("");
    setZip5Error("");

    let hasErrors = false;

    if (!address1) {
      setAddress1Error("Address 1 is required.");
      hasErrors = true;
    }

    if (!city) {
      setCityError("City is required.");
      hasErrors = true;
    }

    if (!state) {
      setStateError("State is required.");
      hasErrors = true;
    }

    if (!zip5) {
      setZip5Error("Zip5 is required.");
      hasErrors = true;
    }

    if (hasErrors) {
      return;
    }

    const xml = `
      <AddressValidateRequest USERID="9251ABC005A13">
          <Revision>1</Revision>
          <Address>
              <Address1>${address1}</Address1>
              <Address2>${address2}</Address2>
              <City>${city}</City>
              <State>${state}</State>
              <Zip5>${zip5}</Zip5>
              <Zip4></Zip4>
          </Address>
      </AddressValidateRequest>
    `;
    // console.log(xml);
    const apiUrl =
      "https://secure.shippingapis.com/ShippingAPI.dll?API=Verify&xml=" +
      encodeURIComponent(xml);

    try {
      const response = await axios.get(apiUrl);
      const parsedData = parseDataFunction(response.data);
      setValidatedAddress(parsedData);
    } catch (error) {
      console.log(error);
    }
  };

  const parseDataFunction = (data) => {
    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, "text/xml");
      console.log(data, xmlDoc);
      const addressElement = xmlDoc.querySelector("Address");
      const error = addressElement.querySelector("Description")?.textContent;
      setError(error);
      const address1 = addressElement.querySelector("Address1")?.textContent;
      const address2 = addressElement.querySelector("Address2")?.textContent;
      const city = addressElement.querySelector("City")?.textContent;
      const state = addressElement.querySelector("State")?.textContent;
      const zip5 = addressElement.querySelector("Zip5")?.textContent;
      const zip4 = addressElement.querySelector("Zip4")?.textContent;

      return {
        address1,
        address2,
        city,
        state,
        zip5,
        zip4,
        error,
      };
    } catch (error) {
      console.error("Error parsing XML:", error);
      return {};
    }
  };

  return (
    <div className="container">
      <div className="py-5 text-center">
        <h2>Address Form</h2>
        <p className="lead">Please fill in your mailing address!</p>
      </div>
      <div className="row g-5 mb-1">
        <div className="col-md-7 col-lg-8">
          <form
            className="row g-5 needs-validation"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="col-md-12">
              <h4 className="mb-3">Mailing Address</h4>
              {error && error != "" && (
                <div className="alert alert-danger">{error}</div>
              )}
            </div>
            <div className="col-md-12">
              <label htmlFor="validationAddress1" className="form-label">
                Address 1
              </label>
              <input
                type="text"
                className={`form-control ${address1Error && "is-invalid"}`}
                id="validationAddress1"
                placeholder="Appartment or Suit "
                value={address1}
                onChange={(e) => {
                  setAddress1(e.target.value);
                  setAddress1Error("");
                }}
                required
              />
              {address1Error && (
                <div className="invalid-feedback">{address1Error}</div>
              )}
            </div>
            <div className="col-md-12">
              <label htmlFor="validationAddress2" className="form-label">
                Address 2(Optional)
              </label>
              <input
                type="text"
                className="form-control"
                id="validationAddress2"
                // value="Appartment or Suit"
                placeholder="1234 Main Street"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
                required
              />
            </div>
            <div className="col-md-5">
              <label htmlFor="validationCity" className="form-label">
                City
              </label>
              <input
                type="text"
                className={`form-control ${cityError && "is-invalid"}`}
                id="validationCity"
                placeholder="City"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                  setCityError("");
                }}
                required
              />
              {cityError && (
                <div className="invalid-feedback">{cityError}</div>
              )}
            </div>
            <div className="col-md-4">
              <label htmlFor="validationState" className="form-label">
                State
              </label>
              <input
                type="text"
                className={`form-control ${stateError && "is-invalid"}`}
                id="validationState"
                placeholder="State"
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                  setStateError("");
                }}
                required
              />
              {stateError && (
                <div className="invalid-feedback">{stateError}</div>
              )}
            </div>
            <div className="col-md-3">
              <label htmlFor="validationZip5" className="form-label">
                Zip5
              </label>
              <input
                type="text"
                className={`form-control ${zip5Error && "is-invalid"}`}
                id="validationZip5"
                placeholder="Zip5"
                value={zip5}
                onChange={(e) => {
                  setZip5(e.target.value);
                  setZip5Error("");
                }}
                required
              />
              {zip5Error && (
                <div className="invalid-feedback">{zip5Error}</div>
              )}
            </div>
            {/* <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck"
                  required
                />
                <label className="form-check-label" htmlFor="invalidCheck">
                  Agree to terms and conditions
                </label>
                <div className="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div> */}
            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Validate
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Validated Address</span>
          </h4>
          <ul className="list-group mb-3 align-items-right">
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Address 1</h6>
                <small className="text-muted" id="address1">
                  {validatedAddress.address1}
                </small>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Address 2</h6>
                <small className="text-muted" id="address2">
                  {validatedAddress.address2}
                </small>
              </div>
            </li>
            {/* <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Country</h6>
                <small className="text-muted" id="country">
                  {validatedAddress.country}
                </small>
              </div>
            </li> */}
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">City</h6>
                <small className="text-muted" id="city">
                  {validatedAddress.city}
                </small>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">State</h6>
                <small className="text-muted" id="state">
                  {validatedAddress.state}
                </small>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Zip 5</h6>
                <small className="text-muted" id="zip_5">
                  {validatedAddress.zip5}
                </small>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Zip 4</h6>
                <small className="text-muted" id="zip_4">
                  ???
                </small>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
