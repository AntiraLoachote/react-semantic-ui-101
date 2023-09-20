import { Container, Grid, Icon, Input, Segment } from 'semantic-ui-react'

export default function Segments() {
  return (
    <Container>
      <Segment loading style={{ height: '200px' }}></Segment>

      <Segment>
        <Input fluid icon placeholder="Search..." iconPosition="left">
          <Icon name="search" />
          <input />
        </Input>

        <br></br>

        {/* stackable single column */}
        <Grid doubling columns={4}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Grid.Column key={item}>
              <Segment>
                <p>Segment {item}</p>
              </Segment>
            </Grid.Column>
          ))}
        </Grid>
      </Segment>

      <h1>Width of Column</h1>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={16}>
            <SegmentContent />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <SegmentContent />
          </Grid.Column>
          <Grid.Column>
            <SegmentContent />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            <SegmentContent />
          </Grid.Column>
          <Grid.Column width={4}>
            <SegmentContent />
          </Grid.Column>
          <Grid.Column width={8}>
            <SegmentContent />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={'equal'}>
          <Grid.Column>
            <SegmentContent />
          </Grid.Column>
          <Grid.Column>
            <SegmentContent />
          </Grid.Column>
          <Grid.Column>
            <SegmentContent />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <h1>Equal</h1>
      <Grid stackable columns={'equal'}>
        <Grid.Row>
          <Grid.Column>
            <SegmentContent />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <SegmentContent />
          </Grid.Column>
          <Grid.Column>
            <SegmentContent />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <SegmentContent />
          </Grid.Column>
          <Grid.Column>
            <SegmentContent />
          </Grid.Column>
          <Grid.Column>
            <SegmentContent />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

function SegmentContent() {
  return (
    <Segment placeholder textAlign="center">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, itaque. Provident, maiores
      porro quos totam minus sint eligendi consectetur ea, vitae reiciendis ut beatae quasi error
      voluptate, ipsa dolores optio.
    </Segment>
  )
}
