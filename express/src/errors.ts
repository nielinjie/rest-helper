//NOTE 这里节约不了多少代码，主要是作为一个默认设计模式来被重用。
interface RestError {
  code?: number;
  message: string;
  type: string;
  instance: string;
  description?: string;
}
type ErrorHandle = (err: Error) => RestError;


export function errorsHandled(logic,errorMap:ErrorHandle){
  return function(req,res){
  try{
    logic(req,res)
  }catch(err){
    let errorJson = errorMap(err);
    res.status(errorJson.code).json(errorJson).send()
  }
}
}