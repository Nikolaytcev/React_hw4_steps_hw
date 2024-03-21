import img_delete from '../../img/delete.svg';
import img_redaction from '../../img/pencil.svg'

interface Ilist {
    distancesList: { id: string, date: string, distance: string}[],
    onDelete: (e: React.MouseEvent<HTMLImageElement>) => void
}

export const Table = ({ distancesList, onDelete }: Ilist) => {
  
  return (
    <div className="table">
      {distancesList.map((raw) => <div className="raw" key={raw.id}>
        <div className="date-table">{raw.date}</div>
        <div className="distance-table">{raw.distance}</div>
        <div className="wigets">
          <img id={raw.id} className="pencil" src={img_redaction} alt="pencil" />
          <img id={raw.id} className="delete" src={img_delete} alt="delete" onClick={onDelete}/>
        </div>
      </div>)}
    </div>
  )
}
