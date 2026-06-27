import { useState } from 'react'
import {
  Button, Badge, Spinner, Input, Card,
  Stack, Divider
} from '@suribef/suri-ui'

export function ButtonDemo() {
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <Stack direction="row" gap={3} wrap>
      <Button onClick={handleClick} loading={loading}>
        {loading ? 'Saving...' : 'Save changes'}
      </Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="ghost">Learn more</Button>
      <Button variant="danger">Delete</Button>
    </Stack>
  )
}

export function BadgeDemo() {
  return (
    <Stack direction="row" gap={2} align="center" wrap>
      <Badge variant="default">Default</Badge>
      <Badge variant="success">Active</Badge>
      <Badge variant="warning">Pending</Badge>
      <Badge variant="danger">Failed</Badge>
      <Badge variant="info">Info</Badge>
      <Divider orientation="vertical" decorative />
      <Badge dot variant="success" aria-label="Online" />
      <Badge dot variant="danger" aria-label="Offline" />
    </Stack>
  )
}

export function FormDemo() {
  const [value, setValue] = useState('')
  const error = value.length > 0 && !value.includes('@')
    ? 'Enter a valid email address'
    : ''

  return (
    <Stack gap={4} style={{ maxWidth: 360 }}>
      <Input
        label="Email"
        placeholder="you@example.com"
        value={value}
        onChange={e => setValue(e.target.value)}
        error={error}
        helperText={!error ? "We'll never share your email" : undefined}
        fullWidth
      />
      <Button fullWidth disabled={!!error || !value}>
        Subscribe
      </Button>
    </Stack>
  )
}

export function CardDemo() {
  return (
    <Card style={{ maxWidth: 340 }}>
      <Card.Header divided>
        <Stack direction="row" justify="between" align="center">
          <strong style={{ color: 'var(--sui-color-secondary-foreground)' }}>
            Project Alpha
          </strong>
          <Badge variant="success" size="sm">Active</Badge>
        </Stack>
      </Card.Header>
      <Card.Body>
        <Stack gap={3}>
          <Input label="Project name" defaultValue="Alpha" fullWidth />
          <Input label="Owner" defaultValue="sergio@dev.io" fullWidth />
        </Stack>
      </Card.Body>
      <Card.Footer divided>
        <Stack direction="row" justify="between">
          <Button variant="ghost" size="sm">Cancel</Button>
          <Button size="sm">Save</Button>
        </Stack>
      </Card.Footer>
    </Card>
  )
}
