import "bootstrap/dist/css/bootstrap.min.css";

export default function AddressForm() {
  return (
    <div className="container">
        <div className="py-5 text-center">
        <h2 >Address Form</h2>
        <p className="lead">Please fill in your mailing address!</p>
        </div>
      <form className="row g-5 needs-validation" noValidate>
        <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Validated Address</span>
            </h4>
            <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Address 1</h6>
                      <small className="text-muted" id="address1">???</small>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Address 2</h6>
                      <small className="text-muted" id="address2">???</small>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Country</h6>
                      <small className="text-muted" id="country">???</small>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">City</h6>
                      <small className="text-muted" id="city">???</small>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">State</h6>
                      <small className="text-muted" id="state">???</small>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Zip 5</h6>
                      <small className="text-muted" id="zip_5">???</small>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Zip 4</h6>
                      <small className="text-muted" id="zip_4">???</small>
                    </div>
                </li>
            </ul>
        </div>
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Mailing Address</h4>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            value="Mark"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom02" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            value="Otto"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustomUsername" className="form-label">
            Username
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              @
            </span>
            <input
              type="text"
              className="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom03" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom03"
            required
          />
          <div className="invalid-feedback">Please provide a valid city.</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom04" className="form-label">
            State
          </label>
          <select className="form-select" id="validationCustom04" required>
            <option selected disabled value="">
              Choose...
            </option>
            <option>...</option>
          </select>
          <div className="invalid-feedback">Please select a valid state.</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom05" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom05"
            required
          />
          <div className="invalid-feedback">Please provide a valid zip.</div>
        </div>
        <div className="col-12">
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
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
}
