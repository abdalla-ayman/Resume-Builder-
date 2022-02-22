function PersonalDetails() {
  return (
    <section>
      <h3 className="my-4">Personal Details : </h3>
      <div className="d-flex flex-column flex-md-row justify-content-center">
        <div class="mb-3 mx-2 w-100 input-div">
          <label for="job-title" class="form-label">
            Job Title
          </label>
          <input type="text" class="form-control" id="job-title" />
        </div>
        <div class="mb-3 mx-2 w-100 input-div ">
          <label for="photo" class="form-label">
            Upload Photo
          </label>
          <input class="form-control" type="file" id="photo" />
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-center">
        <div class="mb-3 mx-2 w-100 input-div">
          <label for="first-name" class="form-label">
            First Name
          </label>
          <input type="text" class="form-control" id="first-name" />
        </div>
        <div class="mb-3 mx-2 w-100 input-div">
          <label for="last-name" class="form-label">
            Last Name
          </label>
          <input type="text" class="form-control" id="last-name" />
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-center">
        <div class="mb-3 mx-2 w-100 input-div">
          <label for="email" class="form-label">
            Email
          </label>
          <input type="email" class="form-control" id="email" />
        </div>
        <div class="mb-3 mx-2 w-100 input-div">
          <label for="phone-number" class="form-label">
            Phone Number
          </label>
          <input type="tel" class="form-control" id="phone-number" />
        </div>
      </div>
    </section>
  );
}

export default PersonalDetails;
