import { NumberDisplay } from "@/components/NumberDisplay/NumberDisplay";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";
import { formatBigInt, formatUSDPrice } from "@/utils/formatting";
import { ComponentProps } from "react";
import { NumberFormatValues, NumericFormat } from "react-number-format";
import { formatUnits, parseUnits } from "viem";
import WalletIcon from "../../../public/images/wallet.svg";

const calculateUsdAmount = ({
  value,
  decimals,
  usdPrice,
}: {
  value: AmountFieldProps["value"];
  decimals: number;
  usdPrice?: bigint;
}) => {
  if (!usdPrice) {
    return undefined;
  }

  if (!value) {
    return undefined;
  }

  const amount = parseUnits(String(value), decimals);

  return formatUSDPrice({ balance: amount, decimals, usdPrice });
};

export type AmountFieldProps = Omit<ComponentProps<typeof NumericFormat>, "onValueChange"> & {
  maxValue: bigint;
  decimals: number;
  usdPrice?: bigint;
  onValueChange: (value: string) => void;
};

export const AmountField = ({
  value,
  onValueChange,
  maxValue,
  decimals,
  usdPrice,
  disabled,
  className,
  ...numericFieldProps
}: AmountFieldProps) => {
  const usdAmount = calculateUsdAmount({ value, decimals, usdPrice });

  const handleAmountChange = (values: NumberFormatValues) => {
    onValueChange(values.value);
  };

  const handleMaxClick = () => {
    onValueChange(formatUnits(maxValue, decimals));
  };

  const isAmountValid = ({ floatValue }: NumberFormatValues) => {
    if (!maxValue || !decimals || !floatValue) {
      return true;
    }
    return floatValue <= parseFloat(formatUnits(maxValue, decimals));
  };

  return (
    <div className="flex flex-col gap-3">
      <div
        className={cn(
          "border-main-950 dark:border-main-500 relative flex h-16 overflow-hidden border",
          "before before:bg-main-950 before:absolute before:top-0 before:right-0 before:left-0 before:h-[1px] before:w-full before:opacity-0 before:transition-opacity before:duration-300",
          "after after:bg-main-950 after:absolute after:top-0 after:right-0 after:bottom-0 after:h-full after:w-[1px] after:opacity-0 after:transition-opacity after:duration-300",
          "focus-within:before:opacity-100 focus-within:after:opacity-100",
        )}
      >
        <NumericFormat
          className={cn(
            "focus:bg-main-50 dark:focus:bg-main-900 block w-full bg-transparent px-5 py-4 text-2xl font-semibold text-stone-700 transition-colors duration-300 focus:outline-hidden dark:text-white",
            className,
          )}
          value={value}
          displayType="input"
          onValueChange={handleAmountChange}
          placeholder="0.000"
          thousandSeparator=","
          decimalScale={decimals}
          allowNegative={false}
          isAllowed={isAmountValid}
          disabled={disabled}
          autoComplete="off"
          {...numericFieldProps}
        />
      </div>

      <div className="line flex h-6 items-center justify-between gap-2 leading-none">
        <div>{!!usdAmount && <NumberDisplay value={usdAmount} type="currency" className="text-base" />}</div>

        <div className="flex items-center gap-4 pr-[5px]">
          <div className="flex items-center gap-1">
            <WalletIcon className="text-main-950 dark:text-white" />
            <span>{formatBigInt(maxValue, decimals)}</span>
          </div>
          <Button elevation={1} onClick={handleMaxClick} disabled={disabled} className="px-1 py-0" size="sm">
            MAX
          </Button>
        </div>
      </div>
    </div>
  );
};
