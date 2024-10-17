import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

const Results = ({ userInput }) => {
      const finalResult = calculateInvestmentResults(userInput);
      const initialInvestment =
            finalResult[0].valueEndOfYear -
            finalResult[0].interest -
            finalResult[0].annualInvestment;
      return (
            <table id="result">
                  <thead>
                        <tr>
                              <th>Year</th>
                              <th>Investment Value</th>
                              <th>Interest (Year)</th>
                              <th>Total Interest</th>
                              <th>Invested Capital</th>
                        </tr>
                  </thead>
                  <tbody>
                        {finalResult.map((yearData) => {
                              const totalInterest =
                                    yearData.valueEndOfYear -
                                    yearData.annualInvestment * yearData.year -
                                    initialInvestment;

                              const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

                              return (
                                    <tr key={yearData.year}>
                                          <td>{yearData.year}</td>
                                          <td>{formatter.format(yearData.valueEndOfYear)}</td>
                                          <td>{formatter.format(yearData.interest)}</td>
                                          <td>{formatter.format(totalInterest)}</td>
                                          <td>{formatter.format(totalAmountInvested)}</td>
                                    </tr>
                              );
                        })}
                  </tbody>
            </table>
      );
};

export default Results;