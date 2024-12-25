 import style from "../component/Card.module.css"

export const Card = ({img,id,title,prize,desc,cata,rate,count}) => {
  return (
      <div className={style.div}>
        <img width={"100%"} src={img} alt="" />
           <h1>ID : {id}</h1>
        <h1>{title}</h1>
        <h4>{prize}</h4>
        <h5>{desc}</h5>
        <h4>{cata}</h4>
        <h5>Rate : {rate} , count : {count} </h5>
    </div>
   )
}
