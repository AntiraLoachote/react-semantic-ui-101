import { Button, Container, Dropdown, Form, Grid, Input, Radio, Segment } from 'semantic-ui-react'

export default function SimpleForm() {
  return (
    <Container>
      <Segment className="padding-segment">
        <Grid stackable columns={1}>
          <Grid.Column width={12}>
            <Form>
              <Form.Field>
                <label>Name</label>
                <input placeholder="Survey Name" />
              </Form.Field>
              <Form.Field>
                <label>Language</label>
                <Dropdown
                  placeholder="Select Language"
                  search
                  selection
                  options={[
                    { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
                    { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
                  ]}
                />
              </Form.Field>
              <Form.Field>
                <label>Brand mapping</label>
                <p>
                  Brand settings dictate the look and feel for a survey. Select which brand to map
                  this survey with,
                </p>
                <Dropdown
                  placeholder="Select Brand"
                  search
                  selection
                  options={[
                    { key: 'b1', value: 'b1', text: 'Brand A' },
                    { key: 'b2', value: 'b2', text: 'Brand B' },
                  ]}
                />
              </Form.Field>
              <Form.Field>
                <label>Expiration settings</label>
                <Form.Group inline>
                  <Form.Checkbox width={6} label="Lock responses from being updated" />{' '}
                  <Form.Field width={10}>
                    <Input style={{ width: '80px' }}></Input>{' '}
                    <span>hours after they're first created.</span>
                  </Form.Field>
                </Form.Group>
              </Form.Field>
              <Form.Field>
                <label>Collaborator access</label>
                <p>
                  Collaborators are a view-only user role. Choose the level of feedback they have
                  access to.
                </p>
                <Form.Field control={Radio} label="All feedback" value="1" checked={true} />
                <Form.Field
                  control={Radio}
                  label="Only their own feedback"
                  value="2"
                  checked={false}
                />
              </Form.Field>
              <Button primary type="submit">
                Save settings
              </Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Segment>
    </Container>
  )
}
