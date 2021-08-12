import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core'

import { useStyles } from '../hooks/useStyles'

type Props = {
  books?: {
    id: number
    name: string
    description: string
  }[]
  loading?: boolean
  error?: boolean
}

export const BookList: FC<Props> = ({ books, loading, error }) => {
  const classes = useStyles()

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error</p>
  }

  return (
    <div data-test="book-list" className={classes.root}>
      <Grid container spacing={3}>
        {(books || []).map((book) => (
          <Grid item xs={4} sm={4} key={book.id} className="book-item">
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.name}
                  >
                    {book.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.description}
                  >
                    {book.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <Link to={`/books/${book.id}`}>View Details</Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
