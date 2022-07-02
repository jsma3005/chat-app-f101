import moment from "moment"

export const parseJSON = (data) => {
  return Object.entries(data).map(([key, value]) => {
    return {
      ...value,
      id: key,
    }
  })
}

export const showLastSignedIn = (lastSignInDate) => {
  return moment(new Date(+lastSignInDate)).startOf(['hour']).fromNow()
}