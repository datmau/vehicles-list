import React, { useState } from 'react'
import { Form, Modal, Button } from 'semantic-ui-react'

const Edit = ({props})=> {

  const [form, setForm] = useState({})  
  const { isOpen, onClose, updateRow } = props;

  const handleChange = event => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    const { name, username } = form
    const { updateRow } = props

    const updatedVehicle = {
      name,
      username,
    }

    updateRow(props.id, updatedVehicle)
    onClose()
  }



    return (
      <Modal open={isOpen} onClose={onClose} closeIcon>
        <Modal.Header>Edit User</Modal.Header>
        <Modal.Content>
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <Form.Input label="Name" name="name" value={name} onChange={handleChange} />
            </Form.Field>
            <Form.Field>
              <Form.Input
                label="Username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Field>
            <Button type="submit" content="Submit" />
          </Form>
        </Modal.Content>
      </Modal>
    )
}

export default Edit