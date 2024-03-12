var documenterSearchIndex = {"docs":
[{"location":"ModelTesting.html#Test-models","page":"Test models","title":"Test models","text":"","category":"section"},{"location":"ModelTesting.html","page":"Test models","title":"Test models","text":"UniversalDiffEq.plot_state_estiamtes(UDE::UDE)\nUniversalDiffEq.print_parameter_estimates(UDE::UDE)\nUniversalDiffEq.plot_predictions(UDE::UDE)\nUniversalDiffEq.plot_predictions(UDE::UDE, test_data::DataFrame)\nUniversalDiffEq.forecast(UDE::UDE, u0::AbstractVector{}, times::AbstractVector{})\nUniversalDiffEq.plot_forecast(UDE::UDE, T::Int)\nUniversalDiffEq.plot_forecast(UDE::UDE, test_data::DataFrame)\nUniversalDiffEq.leave_future_out_cv(model; forecast_length = 10,  K = 10, spacing = 1, step_size = 0.05, maxiter = 500)","category":"page"},{"location":"ModelTesting.html#UniversalDiffEq.plot_state_estiamtes-Tuple{UDE}","page":"Test models","title":"UniversalDiffEq.plot_state_estiamtes","text":"plot_state_estiamtes(UDE::UDE)\n\nPlots the value of the state variables estiamted by the UDE model. \n\n\n\n\n\n","category":"method"},{"location":"ModelTesting.html#UniversalDiffEq.print_parameter_estimates-Tuple{UDE}","page":"Test models","title":"UniversalDiffEq.print_parameter_estimates","text":"print_parameter_estimates(UDE::UDE)\n\nprints the value of the known dynamcis paramters. \n\n\n\n\n\n","category":"method"},{"location":"ModelTesting.html#UniversalDiffEq.plot_predictions-Tuple{UDE}","page":"Test models","title":"UniversalDiffEq.plot_predictions","text":"plot_predictions(UDE::UDE)\n\nPlots the correspondence between the observed state transitons and the predicitons for the model UDE. \n\n\n\n\n\n","category":"method"},{"location":"ModelTesting.html#UniversalDiffEq.plot_predictions-Tuple{UDE, DataFrame}","page":"Test models","title":"UniversalDiffEq.plot_predictions","text":"plot_predictions(UDE::UDE, test_data::DataFrame)\n\nPlots the correspondence between the observed state transitons and observed transitions in the test data. \n\n\n\n\n\n","category":"method"},{"location":"ModelTesting.html#UniversalDiffEq.forecast-Tuple{UDE, AbstractVector, AbstractVector}","page":"Test models","title":"UniversalDiffEq.forecast","text":"forecast(UDE::UDE, u0::AbstractVector{}, times::AbstractVector{})\n\npredicitons from the trained model UDE starting at u0 saving values at times.\n\n\n\n\n\n","category":"method"},{"location":"ModelTesting.html#UniversalDiffEq.plot_forecast-Tuple{UDE, Int64}","page":"Test models","title":"UniversalDiffEq.plot_forecast","text":"plot_forecast(UDE::UDE, T::Int)\n\nPlots the models forecast up to T time steps into the future from the last observaiton.  \n\nUDE - a UDE model object T - the nuber of time steps to forecast\n\n\n\n\n\n","category":"method"},{"location":"ModelTesting.html#UniversalDiffEq.plot_forecast-Tuple{UDE, DataFrame}","page":"Test models","title":"UniversalDiffEq.plot_forecast","text":"plot_forecast(UDE::UDE, test_data::DataFrame)\n\nPlots the models forecast over the range of the test_data along with the value of the test data.   \n\nUDE - a UDE model object T - the nuber of time steps to forecast\n\n\n\n\n\n","category":"method"},{"location":"ModelTesting.html#UniversalDiffEq.leave_future_out_cv-Tuple{Any}","page":"Test models","title":"UniversalDiffEq.leave_future_out_cv","text":"leave_future_out_cv(model; forecast_length = 10,  K = 10, spacing = 1, step_size = 0.05, maxiter = 500)\n\nRuns K fold leave future out cross validation and returns the mean squared forecasting error and a plot to visulaize the model fits.\n\n...\n\nArguments\n\nmodel - the UDE model to test forecastlength - the number of steps to calcualte the forecast performance (default 10). K - the number of forecast tests to run (default 10). spacing - the number of data points to skip between testing sets (default 1). stepsize - step size parameter for the gradient decent algorithm (default 0.05). maxiter - number of iterations for gradent decent (default 500)..  ...\n\n\n\n\n\n","category":"method"},{"location":"index.html#UniversalDiffEq.jl","page":"UniversalDiffEq.jl","title":"UniversalDiffEq.jl","text":"","category":"section"},{"location":"index.html","page":"UniversalDiffEq.jl","title":"UniversalDiffEq.jl","text":"A library to build Neural ordinary differntial equtions (NODEs) and Universal differential eqautions (UDEs) for ecological data.","category":"page"},{"location":"index.html#What-are-NODEs-and-UDE?","page":"UniversalDiffEq.jl","title":"What are NODEs and UDE?","text":"","category":"section"},{"location":"index.html","page":"UniversalDiffEq.jl","title":"UniversalDiffEq.jl","text":"Describe NODES / UDEs ","category":"page"},{"location":"index.html#How-UniversalDiffEq.jl-works","page":"UniversalDiffEq.jl","title":"How UniversalDiffEq.jl works","text":"","category":"section"},{"location":"index.html","page":"UniversalDiffEq.jl","title":"UniversalDiffEq.jl","text":"Describe loss function / fitting proceduce ","category":"page"},{"location":"index.html","page":"UniversalDiffEq.jl","title":"UniversalDiffEq.jl","text":"Pages = [\"UniversalDiffEq.md\",\"Models.md\", \"ModelTesting.md\"]","category":"page"},{"location":"Models.html#Model-Constructors","page":"Model Constructors","title":"Model Constructors","text":"","category":"section"},{"location":"Models.html","page":"Model Constructors","title":"Model Constructors","text":"UniversalDiffEq provides a set of functions to construct NODE and UDE with varying levels of customization. ","category":"page"},{"location":"Models.html#NODES-and-NNDE","page":"Model Constructors","title":"NODES and NNDE","text":"","category":"section"},{"location":"Models.html","page":"Model Constructors","title":"Model Constructors","text":"The simplest models to implement are the fully nonparametrics neural ordinary differential equation (NODE) and neural newtork difference equation (NNDE). These functions use a neural network to represent the right hand side of a system of differential equations and differnce equation respectively","category":"page"},{"location":"Models.html","page":"Model Constructors","title":"Model Constructors","text":"   fracdxdt = NN(xwb) \n   x_t+1 = NN(x_twb)","category":"page"},{"location":"Models.html","page":"Model Constructors","title":"Model Constructors","text":"The NODE function builds a NODE model for a user supplied data set and NNDE build ","category":"page"},{"location":"Models.html","page":"Model Constructors","title":"Model Constructors","text":"UniversalDiffEq.NODE(data;kwargs ... )\n","category":"page"},{"location":"Models.html#UniversalDiffEq.NODE-Tuple{Any}","page":"Model Constructors","title":"UniversalDiffEq.NODE","text":"NODE(data;kwargs ... )\n\nConstructs a nonparametric continuous time model for the data set data using a single layer neural network to represent the systems dynamics. \n\nModel equations\n\n    \fracdxdt = NN(xwb)\n\n...\n\nArguments\n\ndata: a DataFrame object with the time of observations in a column labeled t and the remaining columns the value of the state variables at each time point.\n\nKey word arguments\n\nproc_weight=1.0 : Weight given to the model predictiosn in loss funciton\nobs_weight=1.0 : Weight given to the state estiamtes in loss function \nreg_weight=10^-6 : Weight given to regularization in the loss function \nextrap_rho=0.0 : Asymthotic value of derivitives when extrapolating (negative when extrapolating higher than past observaitons, postive when extrapolating lower)\nl=0.25 : rate at which extrapolations converge on asymthotic behavior\n\n...\n\n\n\n\n\n","category":"method"},{"location":"Models.html","page":"Model Constructors","title":"Model Constructors","text":"   fracdxdt = NN(xwb) \n   x_t+1 = NN(x_twb)","category":"page"},{"location":"Models.html","page":"Model Constructors","title":"Model Constructors","text":"Covariates can be added to the model by supplying a second data frame X with thier values at differnt points in time. The value of the covaritates are appended to the state vector x to create the input for the neural network","category":"page"},{"location":"Models.html","page":"Model Constructors","title":"Model Constructors","text":"   fracdxdt = NN(xX(t)wb) \n   x_t+1 = NN(x_tX_twb)","category":"page"},{"location":"Models.html","page":"Model Constructors","title":"Model Constructors","text":"The NODE models use a linear interpolation to approximate the value fo the covarites between observations. odel with covariates have not been developed for the discrete time case yet.  ","category":"page"},{"location":"Models.html","page":"Model Constructors","title":"Model Constructors","text":"UniversalDiffEq.NODE(data,X;kwargs ... )","category":"page"},{"location":"Models.html#UniversalDiffEq.NODE-Tuple{Any, Any}","page":"Model Constructors","title":"UniversalDiffEq.NODE","text":"NODE(data,X;kwargs ... )\n\nWhen a dataframe X is supplied the model will run with covariates. the argumetn X should have a column for time t with the vlaue fo time in the remaining columns. The values in X will be interpolated with a linear spline for value of time not included int he data frame. \n\nWhen X is provided the derivs function must have the form derivs!(du,u,x,p,t) where x is a vector with the value of the coarates at time t.     \n\n\n\n\n\n","category":"method"},{"location":"Models.html#UDEs","page":"Model Constructors","title":"UDEs","text":"","category":"section"},{"location":"Models.html","page":"Model Constructors","title":"Model Constructors","text":"UniversalDiffEq.CustomDerivatives(data,derivs!,initial_parameters;kwargs ... )\nUniversalDiffEq.CustomDiffernce(data,derivs,initial_parameters;kwrags...)","category":"page"},{"location":"Models.html#UniversalDiffEq.CustomDerivatives-Tuple{Any, Any, Any}","page":"Model Constructors","title":"UniversalDiffEq.CustomDerivatives","text":"CustomDerivatives(data,derivs!,initial_parameters;kwargs ... )\n\nConstructs a UDE model for the data set data  based on user defined derivitivs derivs. An initial guess of model parameters are supplied with the initia_parameters argument. \n\n...\n\nArguments\n\ndata: a DataFrame object with the time of observations in a column labeled t and the remaining columns the value of the state variables at each time point. \nderivs: a Function of the form derivs!(du,u,p,t) where u is the value of the state variables, p are the model parameters, t is time, and du is updated with the value of the derivitives\ninit_parameters: A NamedTuple with the model parameters. Neural network parameters must be listed under the key NN.\n\nKey word arguments\n\nproc_weight=1.0 : Weight given to the model predictiosn in loss funciton\nobs_weight=1.0 : Weight given to the state estiamtes in loss function \nreg_weight=10^-6 : Weight given to regularization in the loss function \nextrap_rho=0.0 : Asymthotic value of derivitives when extrapolating (negative when extrapolating higher than past observaitons, postive when extrapolating lower)\nl=0.25 : rate at which extrapolations converge on asymthotic behavior\n\n...\n\n\n\n\n\n","category":"method"},{"location":"Models.html#UniversalDiffEq.CustomDiffernce-Tuple{Any, Any, Any}","page":"Model Constructors","title":"UniversalDiffEq.CustomDiffernce","text":"CustomDiffernce(data,derivs,initial_parameters;kwrags...)\n\nConstructs a UDE model for the data set data based on user defined difference equation step. An initial guess of model parameters are supplied with the initia_parameters argument.\n\ndata: a DataFrame object with the time of observations in a column labeled t and the remaining columns the value of the state variables at each time point. \nstep: a Function of the form step(u,t,p) where u is the value of the state variables, p are the model parameters.\ninit_parameters: A NamedTuple with the model parameters. Neural network parameters must be listed under the key NN.\n\n...\n\nKey word arguments\n\nproc_weight=1.0 : Weight given to the model predictiosn in loss funciton\nobs_weight=1.0 : Weight given to the state estiamtes in loss function \nreg_weight=10^-6 : Weight given to regularization in the loss function \nextrap_rho=0.0 : Asymthotic value of derivitives when extrapolating (negative when extrapolating higher than past observaitons, postive when extrapolating lower)\nl=0.25 : rate at which extrapolations converge on asymthotic behavior\n\n...\n\n\n\n\n\n","category":"method"},{"location":"Models.html#Adding-Covariates","page":"Model Constructors","title":"Adding Covariates","text":"","category":"section"},{"location":"Models.html","page":"Model Constructors","title":"Model Constructors","text":"UniversalDiffEq.CustomDerivatives(data,X,derivs!,initial_parameters;kwargs ... )\nUniversalDiffEq.CustomDiffernce(data,X,step,initial_parameters;kwargs ... )","category":"page"},{"location":"Models.html#UniversalDiffEq.CustomDerivatives-NTuple{4, Any}","page":"Model Constructors","title":"UniversalDiffEq.CustomDerivatives","text":"CustomDerivatives(data,X,derivs!,initial_parameters;kwargs ... )\n\nWhen a dataframe X is supplied the model will run with covariates. the argumetn X should have a column for time t with the vlaue fo time in the remaining columns. The values in X will be interpolated with a linear spline for value of time not included int he data frame. \n\nWhen X is provided the derivs function must have the form derivs!(du,u,x,p,t) where x is a vector with the value of the coarates at time t. \n\n\n\n\n\n","category":"method"},{"location":"Models.html#UniversalDiffEq.CustomDiffernce-NTuple{4, Any}","page":"Model Constructors","title":"UniversalDiffEq.CustomDiffernce","text":"CustomDiffernce(data,X,step,initial_parameters;kwargs ... )\n\nWhen a dataframe X is supplied the model will run with covariates. the argumetn X should have a column for time t with the vlaue fo time in the remaining columns. The values in X will be interpolated with a linear spline for value of time not included int he data frame. \n\nWhen X is provided the step function must have the form step(u,x,t,p) where x is a vector with the value of the coarates at time t. \n\n\n\n\n\n","category":"method"},{"location":"Models.html#Other-functions","page":"Model Constructors","title":"Other functions","text":"","category":"section"},{"location":"Models.html","page":"Model Constructors","title":"Model Constructors","text":"UniversalDiffEq.NNDE(data;kwargs ...)\nUniversalDiffEq.DiscreteUDE(data,step,init_parameters;kwargs ...)\n\nUniversalDiffEq.UDE(data,derivs,init_parameters;kwargs...)","category":"page"},{"location":"Models.html#UniversalDiffEq.NNDE-Tuple{Any}","page":"Model Constructors","title":"UniversalDiffEq.NNDE","text":"NNDE(data;kwargs ...)\n\nConstructs a nonparametric discrete time model for the data set data using a single layer neural network to reporesent the systems dynamics. \n\nModel equations\n\nx_t+1 = NN(x_twb)\n\n...\n\nArguments\n\ndata: a DataFrame object with the time of observations in a column labeled t and the remaining columns the value of the state variables at each time point. \n\nKey word arguments\n\nproc_weight=1.0 : Weight given to the model predictiosn in loss funciton\nobs_weight=1.0 : Weight given to the state estiamtes in loss function \nreg_weight=10^-6 : Weight given to regularization in the loss function \nextrap_rho=0.0 : Asymthotic value of derivitives when extrapolating (negative when extrapolating higher than past observaitons, postive when extrapolating lower)\nl=0.25 : rate at which extrapolations converge on asymthotic behavior\n\n...\n\n\n\n\n\n","category":"method"},{"location":"Models.html#UniversalDiffEq.DiscreteUDE-Tuple{Any, Any, Any}","page":"Model Constructors","title":"UniversalDiffEq.DiscreteUDE","text":"DiscreteUDE(data,step,init_parameters;kwargs ...)\n\nConstructs an additive UDE model with user supplied difference equations step and a single layer neural network. When init_parameters are provided for the use supplied function their values will be estiated in the training process.  \n\nModel equaitons\n\nx_t+1 = f(x_t\theta) + NN(x_twb)\n\n...\n\nKey word arguments\n\nproc_weight=1.0 : Weight given to the model predictiosn in loss funciton\nobs_weight=1.0 : Weight given to the state estiamtes in loss function \nreg_weight=10^-6 : Weight given to regularization in the loss function \nextrap_rho=0.0 : Asymthotic value of derivitives when extrapolating (negative when extrapolating higher than past observaitons, postive when extrapolating lower)\nl=0.25 : rate at which extrapolations converge on asymthotic behavior\n\n...\n\n\n\n\n\n","category":"method"},{"location":"Models.html#UniversalDiffEq.UDE-Tuple{Any, Any, Any}","page":"Model Constructors","title":"UniversalDiffEq.UDE","text":"UDE(data,derivs,init_parameters;kwargs...)\n\nConstructs an additive continuous time UDE model with user supplied derivitives step and a single layer neural network. When init_parameters are provided for the user supplied function their values will be estiated during model training. \n\nModel equaitons\n\n    \fracdxdt = f(x\theta) + NN(xwb)\n\n...\n\nKey word arguments\n\nproc_weight=1.0 : Weight given to the model predictiosn in loss funciton\nobs_weight=1.0 : Weight given to the state estiamtes in loss function \nreg_weight=10^-6 : Weight given to regularization in the loss function \nextrap_rho=0.0 : Asymthotic value of derivitives when extrapolating (negative when extrapolating higher than past observaitons, postive when extrapolating lower)\nl=0.25 : rate at which extrapolations converge on asymthotic behavior\n\n...\n\n\n\n\n\n","category":"method"}]
}