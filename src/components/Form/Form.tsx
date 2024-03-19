
interface Iform {
    changeField: (e: React.ChangeEvent<HTMLInputElement>) => void,
    submit: (e: React.FormEvent<HTMLFormElement>) => void
}

const Form = ({changeField, submit}: Iform) => {
  return (
    <form action="" onSubmit={submit}>
        <div className="date-distance">
            <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
            <input type="date" name="date" id="date" onChange={changeField}/>
        </div>

        <div className="date-distance">
            <label htmlFor="distance">Пройдено км.</label>
            <input type="text" name="distance" id="distance" onChange={changeField}/>
        </div>
        
        <button type="submit">ок</button>
    </form>
  )
}

export default Form