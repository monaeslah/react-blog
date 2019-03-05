import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class Essay extends React.Component {
  constructor(){
    super()
    this.state = {
        first_name:'',//az safhe register bardashtam 
        last_name:'',
        email: '',
        password:'',
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
}
  render() {
    return (
      <Form>
      
        
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        
        <Button type="submit" >
        Submit</Button>
      </Form>
    );
  }
}
export default Essay