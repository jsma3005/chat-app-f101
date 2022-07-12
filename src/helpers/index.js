import moment from "moment"
import 'moment/locale/ru'

moment.locale('ru')

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