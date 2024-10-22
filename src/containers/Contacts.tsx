const Contacts = () => {
  return (
    <div className="container mb-5">
      <h2 className="text-center mt-5 fs-1 mb-1">Contacts</h2>
      <div className="row">
        <div className="col-4 mt-5 phone px-2">
          <div className="mt-auto">
            <div className="fs-4">+70000234234</div>
            <div className="fs-4">+99609809809</div>
          </div>
        </div>
        <div className="col-4 mt-5 adress px-2">
          <span className="fs-4">
            Kyrgyzstan, g. Bishkek, ul. Ivana Sidorova, 25
          </span>
        </div>
        <div className="col-4 mt-5 mail px-2">
          <span className="fs-4">www.IvanaSidorova@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
