interface Ilist {
    distancesList: object[]
}

export const Table = ({ distancesList }: Ilist) => {
    if (distancesList.length !== 0) {
        console.log(distancesList)
    }
  return (
    <div></div>
  )
}
