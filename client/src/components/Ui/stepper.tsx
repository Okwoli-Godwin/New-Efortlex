"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  activeStep: number
  children: React.ReactNode
}

const Stepper = React.forwardRef<
  HTMLDivElement,
  StepperProps
>(({ activeStep, children, className, ...props }, ref) => {
  const steps = React.Children.toArray(children)

  return (
    <div
      ref={ref}
      className={cn("flex items-center justify-between", className)}
      {...props}
    >
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          {step}
          {index < steps.length - 1 && (
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300" />
          )}
        </React.Fragment>
      ))}
    </div>
  )
})
Stepper.displayName = "Stepper"

interface StepProps extends React.HTMLAttributes<HTMLDivElement> {
  completed?: boolean
}

const Step = React.forwardRef<
  HTMLDivElement,
  StepProps
>(({ completed, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex items-center justify-center w-10 h-10 bg-white border-2 border-gray-300 rounded-full transition duration-500 ease-in-out",
      completed && "border-primary bg-primary text-primary-foreground",
      className
    )}
    {...props}
  />
))
Step.displayName = "Step"

interface StepLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  optional?: React.ReactNode
}

const StepLabel = React.forwardRef<
  HTMLDivElement,
  StepLabelProps
>(({ optional, className, children, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col items-center", className)} {...props}>
    <div className="text-sm font-medium">{children}</div>
    {optional && (
      <div className="text-xs text-muted-foreground">{optional}</div>
    )}
  </div>
))
StepLabel.displayName = "StepLabel"

export { Stepper, Step, StepLabel }