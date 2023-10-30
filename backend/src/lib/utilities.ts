import AE from "aggregate-error";
import { ValidationError } from "class-validator";
import { TypeORMError } from "typeorm";

interface IError extends Error {
  field: string | null;
  message: string;
}

//formatage des erreurs venant de class-validator
export function aggregateErrors(
  errors: ValidationError[]
  // ): AggregateError<Error> {
): any {
  const errorsFormated = errors.map((error) => {
    console.log("ERROR DE VALIDATION : ", error);
    if (error.constraints) {
      // const key = Object.keys(error.constraints); // "min"
      const key = Object.keys(error?.constraints || {})[0]; // "min"
      console.log("KEY =============>", key);
      console.log("PROPERTY", error.property);
      return {
        field: error.property,
        message: error.constraints[key], //error.contraints["min"]
      };
    } else {
      return {};
    }
  });
  return errorsFormated;
}

export function formatedErrors(err: AggregateError | TypeORMError) {
  const e: any = {
    errors: [],
  };

  if (err.name === "AggregateError") {
    const aggregateError = err as any;
    // const aggregateError = err as AE<IError>;
    e.errors = aggregateError.errors;
  }

  return e;
}