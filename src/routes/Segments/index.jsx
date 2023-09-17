import { Grid, Icon, Input, Segment } from 'semantic-ui-react'

export default function Segments() {
  return (
    <>
      <Segment loading style={{ height: '200px' }}></Segment>
      <Segment>
        <Input fluid icon placeholder="Search..." iconPosition="left">
          <Icon name="search" />
          <input />
        </Input>

        <br></br>
        <Grid stackable columns={4} padded="vertically">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Grid.Column key={item}>
              <Segment>
                <p>Segment {item}</p>
              </Segment>
            </Grid.Column>
          ))}
        </Grid>
      </Segment>
    </>
  )
}
