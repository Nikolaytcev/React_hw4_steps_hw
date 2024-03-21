interface Iobj {
    id: string, 
    date: string,
    distance: string
  }

export function sumAndSort(distancesList: { id: string, date: string, distance: string}[]) {
    let distanceListNew: Iobj[] = [{ id: '', date: '', distance: ''}];

    if (distancesList[distancesList.length - 1].date !== '' && distancesList[distancesList.length - 1].distance !== '') {
        const distanceListSort = distancesList.filter(function(dist) {return dist.date === distancesList[distancesList.length - 1].date});
        let distanceSum: number = 0;
        distanceListSort.forEach(dist => {
          distanceSum += Number(dist.distance);
        });
        distanceListNew = distancesList.filter(function(dist) {return dist.date !== distancesList[distancesList.length - 1].date
        && dist.date !== ''});
        distanceListNew.push({id: distanceListSort[0].id, date: distanceListSort[0].date, distance: distanceSum.toString()});
    }

    distanceListNew.sort((a: Iobj, b: Iobj) => Date.parse(b.date) - Date.parse(a.date));
  return distanceListNew
      
}