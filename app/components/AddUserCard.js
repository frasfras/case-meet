import React , { Component } from 'react';

import Select from 'react-select';
export default class AddUserCard extends Component {

  onHandleAddUser(user) {
    this.props.handleAddUser(user);
  }
 onSubmitForm1(e) {
    e.preventDefault();
        

    const type = this.props.selectedCountry.trim();
    const gender = this.props.selectedGender.trim();
    const name = this.refs.name.value.trim();
    const time = this.refs.time.value.trim();
    const day = this.refs.day.value.trim();
    const facts = this.refs.facts.value.trim();
    const questn = this.refs.query.value.trim();
    const apptoken = 'b5r9vn_pdy8_cnadf2gbrjscg9p6eh74by7ktve';
    const dbid = '[_DBID_LEGAL_TICKET]';

   

    console.log (facts);
     if(questn && type && time && day && facts) {
     
     

     
   
  var headers = {
    'QB-Realm-Hostname': 'hackathon20-fsilva.quickbase.com',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36',
    'Authorization': 'QB-USER-TOKEN b5r9vn_pdy8_cnadf2gbrjscg9p6eh74by7ktve',
      'Content-Type': 'application/json'
  }

      var body= {"to":"bqygrq829","data":[{"6":{"value": type},"8":{"value": day},"9":{"value":"DRAFT"}, "10":{"value":name}, "11":{"value": facts}, "12":{"value": questn},"13":{"value": "Lee Piper"},"23":{"value":time}}],"fieldsToReturn":[6,23,8,9,10,11,12,13,23]}

        fetch('https://api.quickbase.com/v1/records',
        {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(body)
        })
      .then(res => {
        if (res.ok) {
          return res.json().then(res => console.log(res));
        }
        // return res.json().then(resBody => Promise.reject({status: res.status, ...resBody}));
      })
      .catch(err => console.log(err))

      this.resetFields();

       }else {
      alert("Please input all fields correctly")
    }

     // alert('$region');
}
  onSubmitForm(e) {
    e.preventDefault();

  }

  resetFields(e) {
    if(e) {
      e.preventDefault();
    }
    this.refs.name.value = '';
    this.refs.query.value = '';
    // this.refs.age.value = '';
    this.refs.day.value = '';
    this.refs.time.value = '';
    this.refs.facts.value = '';
    this.onHandeChangeSelectedCountry();
    this.onHandeChangeSelectedGender();

  }
 

  onToggleAddSection() {
    this.props.handleToggleAddSection();
  }

  onHandeChangeSelectedGender(val) {
    const gender = val ? val.value : '';
    this.props.handeChangeSelectedGender(gender);
  }

  onHandeChangeSelectedCountry(val) {
    const country = val ? val.value : '';
    this.props.handeChangeSelectedCountry(country);
  }

  getGenderSelectOptions() {
    return [
      { value: 'male', label: 'Male', clearableValue: false },
      { value: 'female', label: 'Female' , clearableValue: false}
    ];
  }
   getProblemSelectOptions() {
    return [
      { value: 'Personal', label: 'Personal', clearableValue: false },
      { value: 'Family', label: 'Family' , clearableValue: false},
      { value: 'Property', label: 'problem with property', clearableValue: false },
      { value: 'Business', label: 'problem in business' , clearableValue: false},
      { value: 'Legal documents', label: 'Legal documents', clearableValue: false },
      { value: 'Other', label: 'Anything' , clearableValue: false}
    ];
  }

  // getCountrySelectOptions() {
    // const options = [];
    // for( const country in CountryCodes ) {
    //   options.push({
    //     value: country,
    //     label: country
    //   })
  //   }
  //   return options;
  // }

  render() {
    const isAddSectionVisible = this.props.isAddSectionVisible;
    const addSectionStyle = { display: isAddSectionVisible ? 'block' : 'display' };
    const plusOrMinusSign = isAddSectionVisible ? 'fa fa-minus fa-2x' : 'fa fa-plus fa-2x';
    const addOrRemoveText = isAddSectionVisible ? 'Hide' : '...Add Legal problem';

    return (

      <div>

        <i className = { plusOrMinusSign } onClick = {:: this.onToggleAddSection }></i> { addOrRemoveText }

        <div style = { addSectionStyle } className="col-lg-12 addUserSection">
          <form onSubmit = { ::this.onSubmitForm1 } >

            <div className="form-group row">
              <label htmlFor="gender" className="col-sm-2 col-form-label">Gender</label>
              <div className="col-sm-10">
                <Select
                  name="form-field-name"
                  value= { this.props.selectedGender }
                  options={ this.getGenderSelectOptions() }
                  onChange={::this.onHandeChangeSelectedGender}
                
                />
           
                
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="name" placeholder="Name" autoComplete = "off" ref = "name"/>
              </div>
            </div>

          
              <div className="form-group row">
              <label htmlFor="phone" className="col-sm-2 col-form-label">Facts</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="facts" placeholder="Facts" autoComplete = "off" ref = "facts"/>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="age" className="col-sm-2 col-form-label">Query</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="query" placeholder="question" autoComplete = "off" ref = "query"/>
              </div>
            </div>
            
            <div className="form-group row">
              <label htmlFor="age" className="col-sm-2 col-form-label">Time</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="time" placeholder="12pm" autoComplete = "off" ref = "time"/>
               
              </div>
            </div>


            <div className="form-group row">
              <label htmlFor="day" className="col-sm-2 col-form-label">Day</label>
              <div className="col-sm-10">
                <input type="date" id="day" name="day" ref = "day"/>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="region" className="col-sm-2 col-form-label">Legal Issue</label>
              <div className="col-sm-10">
              <Select
                name="form-field-country"
                value= { this.props.selectedCountry }
                options={ this.getProblemSelectOptions() }
                onChange={:: this.onHandeChangeSelectedCountry }
              />
              </div>
            </div>

            <input className="btn btn-secondary mr-3" type="submit" value="Submit"/>
            <button className="btn btn-secondary" onClick={::this.resetFields }>Clear Fields</button>
          </form>
        </div>
      </div>
    );
  }
}
