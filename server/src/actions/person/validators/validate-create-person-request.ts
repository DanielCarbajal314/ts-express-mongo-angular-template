import { body, ValidationChain } from "express-validator";

export function ValidateCreatePersonRequest(): ValidationChain[] {
  return [
    body("dni")
      .notEmpty()
      .isLength({ min: 8, max: 8 })
      .withMessage("El DNI debe tener 8 Caracteres"),
    body("married").notEmpty().isBoolean(),
    body("coupleDni")
      .isLength({ min: 8, max: 8 })
      .withMessage("El DNI debe tener 8 Caracteres")
      .optional({ nullable: true }),
    body("propertyPrice").notEmpty().isNumeric(),
    body("initialAmount").notEmpty().isNumeric(),
    body("yearsToPay").notEmpty().isNumeric(),
    body("timeToBuyWait").notEmpty().isNumeric(),
    body("paymentAmount").notEmpty().isNumeric(),
    body("workTime").notEmpty().isNumeric(),
    body("debtPaymentAmount").notEmpty().isNumeric(),
    body("email").notEmpty().isEmail().normalizeEmail(),
    body("debtAmount").notEmpty().isNumeric(),
    body("phone").notEmpty().isMobilePhone("es-PE"),
    body("isFirstProperty").notEmpty().isBoolean(),
    body("propertyType").notEmpty().isString(),
    body("contractType").notEmpty().isString(),
    body("workType").notEmpty().isString(),
    body("independantWorkRegime").isString().optional({ nullable: true }),
  ];
}
