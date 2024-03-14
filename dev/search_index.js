var documenterSearchIndex = {"docs":
[{"location":"ModelTesting/#Test-models","page":"Test models","title":"Test models","text":"","category":"section"},{"location":"ModelTesting/","page":"Test models","title":"Test models","text":"UniversalDiffEq.plot_state_estiamtes(UDE::UDE)\nUniversalDiffEq.print_parameter_estimates(UDE::UDE)\nUniversalDiffEq.plot_predictions(UDE::UDE)\nUniversalDiffEq.plot_predictions(UDE::UDE, test_data::DataFrame)\nUniversalDiffEq.forecast(UDE::UDE, u0::AbstractVector{}, times::AbstractVector{})\nUniversalDiffEq.plot_forecast(UDE::UDE, T::Int)\nUniversalDiffEq.plot_forecast(UDE::UDE, test_data::DataFrame)\nUniversalDiffEq.leave_future_out_cv(model; forecast_length = 10,  K = 10, spacing = 1, step_size = 0.05, maxiter = 500)","category":"page"},{"location":"ModelTesting/#UniversalDiffEq.plot_state_estiamtes-Tuple{UDE}","page":"Test models","title":"UniversalDiffEq.plot_state_estiamtes","text":"plot_state_estiamtes(UDE::UDE)\n\nPlots the value of the state variables estiamted by the UDE model. \n\n\n\n\n\n","category":"method"},{"location":"ModelTesting/#UniversalDiffEq.print_parameter_estimates-Tuple{UDE}","page":"Test models","title":"UniversalDiffEq.print_parameter_estimates","text":"print_parameter_estimates(UDE::UDE)\n\nprints the value of the known dynamcis paramters. \n\n\n\n\n\n","category":"method"},{"location":"ModelTesting/#UniversalDiffEq.plot_predictions-Tuple{UDE}","page":"Test models","title":"UniversalDiffEq.plot_predictions","text":"plot_predictions(UDE::UDE)\n\nPlots the correspondence between the observed state transitons and the predicitons for the model UDE. \n\n\n\n\n\n","category":"method"},{"location":"ModelTesting/#UniversalDiffEq.plot_predictions-Tuple{UDE, DataFrame}","page":"Test models","title":"UniversalDiffEq.plot_predictions","text":"plot_predictions(UDE::UDE, test_data::DataFrame)\n\nPlots the correspondence between the observed state transitons and observed transitions in the test data. \n\n\n\n\n\n","category":"method"},{"location":"ModelTesting/#UniversalDiffEq.forecast-Tuple{UDE, AbstractVector, AbstractVector}","page":"Test models","title":"UniversalDiffEq.forecast","text":"forecast(UDE::UDE, u0::AbstractVector{}, times::AbstractVector{})\n\npredicitons from the trained model UDE starting at u0 saving values at times.\n\n\n\n\n\n","category":"method"},{"location":"ModelTesting/#UniversalDiffEq.plot_forecast-Tuple{UDE, Int64}","page":"Test models","title":"UniversalDiffEq.plot_forecast","text":"plot_forecast(UDE::UDE, T::Int)\n\nPlots the models forecast up to T time steps into the future from the last observaiton.  \n\nUDE - a UDE model object T - the nuber of time steps to forecast\n\n\n\n\n\n","category":"method"},{"location":"ModelTesting/#UniversalDiffEq.plot_forecast-Tuple{UDE, DataFrame}","page":"Test models","title":"UniversalDiffEq.plot_forecast","text":"plot_forecast(UDE::UDE, test_data::DataFrame)\n\nPlots the models forecast over the range of the test_data along with the value of the test data.   \n\nUDE - a UDE model object T - the nuber of time steps to forecast\n\n\n\n\n\n","category":"method"},{"location":"ModelTesting/#UniversalDiffEq.leave_future_out_cv-Tuple{Any}","page":"Test models","title":"UniversalDiffEq.leave_future_out_cv","text":"leave_future_out_cv(model; forecast_length = 10,  K = 10, spacing = 1, step_size = 0.05, maxiter = 500)\n\nRuns K fold leave future out cross validation and returns the mean squared forecasting error and a plot to visulaize the model fits.\n\n...\n\nArguments\n\nmodel - the UDE model to test forecastlength - the number of steps to calcualte the forecast performance (default 10). K - the number of forecast tests to run (default 10). spacing - the number of data points to skip between testing sets (default 1). stepsize - step size parameter for the gradient decent algorithm (default 0.05). maxiter - number of iterations for gradent decent (default 500)..  ...\n\n\n\n\n\n","category":"method"},{"location":"NutsAndBolts/#UDE-model-construction","page":"UDE model construction","title":"UDE model construction","text":"","category":"section"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"Some users may wish to access elements of a fitted model directly to create custom model visualizations, performance tests, or other applications not forseen by thr developers. To this end, we provide documentation of classes (Julia mutable structs) used by UniversalDiffEq.jl to build the NODE and UDE objects. The package is built around the UDE class which stores the data used to fit a model and instances of six submodel classes used to define the full model. ","category":"page"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"UniversalDiffEq uses a state space modeling framework to define and fit NODE and UDE models. State space models are a class of time series models that describe a time series data with a process model that describes the dynaics of a sequence of unobserved state variables u_t a second observaiton model defines the relationship between the state variables u_t and the observations x_t.  The process model f predicts value of the state variables one step ahead","category":"page"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"hatu_t+Delta t  = f(u_t t Delta t theta_proc)","category":"page"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"where Delta t is the time span between observations, and theta_proc is the model paramters. The observaiton model maps from the state variables u_t to the observations","category":"page"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"x_t = h(u_t t Delta t theta_obs)","category":"page"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"where theta_obs are the observaiton model parameters. In addition to these primary functions both the observaiton models and process models have loss funtion to measure the accuracy of thier predictions. These can be thought of like the likelihood models used in generalized linear models. for example, we can measure the perforance of the process model with a normal likelihood","category":"page"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"L(hatu_tu_t) = frac1sigma sqrt2pi e^-frac12(frachatu_t-u_tsigma)^2","category":"page"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"where sigma is the variance of the prediciton errors. Although in principal any likelihood can be used, we use the mean squared error in our base model specification. ","category":"page"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"The UDE models also include submodels to regualrize the process and observaiton models. The regualrization models are functions of the model parameters that add to the loss funtion. The regularizaiton models are ineffect priors on the model parameters. Regularization in expecially important for nerual network models. For example, out default model constructors apply L2 regualrizaiton to neuarl network paramters in the process model","category":"page"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"R(theta_proc) = omega theta_proc_L2","category":"page"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"where omega is the weight given to regualrization in the over all loss function. ","category":"page"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"These six model components are all combined into one loss functions used to fit the UDE models","category":"page"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"L(utheta_proctheta_obsx) = sum_t =1^T L_obs(x_th(u_ttheta_obs)sigma_obs) + sum_t=2^T L_proc(u_tf(u_t-1theta_proc)sigma_proc) + R_obs(theta_obs) + R_proc(theta_proc)","category":"page"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"where the sigma_i are paramters for the loss functions and the theta_i are paramters for the prediction functions. ","category":"page"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"The UDE object combines the observation and process models and their rpective loss and regualrization models into one larger model object along with the data used to fit the model.","category":"page"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"UDE","category":"page"},{"location":"NutsAndBolts/#UniversalDiffEq.UDE","page":"UDE model construction","title":"UniversalDiffEq.UDE","text":"UDE\n\nBasic data structure used to the model structure, parameters and data for UDE and NODE models.  ...\n\nElements\n\ntimes: a vector of times for each observation\ndata: a matrix of observaitons at each time point\nX: a DataFrame with any covariates used by the model\ndata_frame: a DataFrame with colums for the time of each observation and values of the state variables\nparameters: a ComponentArray that stores model parameters\nloss_function: the loss function used to fit the model\nprocess_model: a Julia mutable struct used to define model predictions \nprocess_loss: a Julia mutable struct used to measure the peroance of model predictions\nobservation_model: a Julia mutable struct used to predict observaitons given state variable estiamtes\nobservaiton_loss: a Julia mutable struct used to measure the performance of the observaiton model\nprocess_regularization: a Julia mutable struct used to store data needed for process model regularization\nobservation_regularization: a Julia mutable struct used to store data needed for observation model regularization\nconstructor: A function that initializes a UDE model with identical structure. \n\n...\n\n\n\n\n\n","category":"type"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"UniversalDiffEq.ProcessModel","category":"page"},{"location":"NutsAndBolts/#UniversalDiffEq.ProcessModel","page":"UDE model construction","title":"UniversalDiffEq.ProcessModel","text":"ProcessModel\n\nA Julia mutable struct that stores the functions and parameters for the process model.  ...\n\nElements\n\nparameters: ComponentArray\npredict: Function the predict one time step ahead\nforecast: Function, a modified version of rpedict to imporve performace when extrapolating\ncovariates: Function that returns the value of the covariates at each point in time. \n\n...\n\n\n\n\n\n","category":"type"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"UniversalDiffEq.LossFunction","category":"page"},{"location":"NutsAndBolts/#UniversalDiffEq.LossFunction","page":"UDE model construction","title":"UniversalDiffEq.LossFunction","text":"LossFunction\n\nA Julia mutable struct that stores the loss function and parameters. ...\n\nElements\n\nparameters: ComponentArray\nloss: Function \n\n...\n\n\n\n\n\n","category":"type"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"UniversalDiffEq.Regularization  ","category":"page"},{"location":"NutsAndBolts/#UniversalDiffEq.Regularization","page":"UDE model construction","title":"UniversalDiffEq.Regularization","text":"Regularization\n\nA Julia mutable struct that stores the loss function and parameters. ...\n\nElements\n\nreg_parameters: ComponentArray\nloss: Function \n\n...\n\n\n\n\n\n","category":"type"},{"location":"MultipleTimeSeries/#Fitting-a-model-to-multiple-time-series","page":"Fitting a model to multiple time series","title":"Fitting a model to multiple time series","text":"","category":"section"},{"location":"MultipleTimeSeries/","page":"Fitting a model to multiple time series","title":"Fitting a model to multiple time series","text":"UniversalDiffEq provides a set of functions to fit models to multiple time series. The functions for this mirror the fucntions for fitting NODEs and UDE to single time series with prefix Multi. For example, to build a NODE model for multiple time series you woudl use the MultiNODE function. The functions for model fitting, testing and visualization have the same names. The other imporant differnce is the data formate, a colum with a unique index for each time series must be included. ","category":"page"},{"location":"MultipleTimeSeries/#Dataframe","page":"Fitting a model to multiple time series","title":"Dataframe","text":"","category":"section"},{"location":"MultipleTimeSeries/","page":"Fitting a model to multiple time series","title":"Fitting a model to multiple time series","text":"t series x1 x2\n1 1 x_11t x_12t\n2 1 x_11t x_12t\n3 1 x_11t x_12t\n1 2 x_21t x_22t\n2 2 x_21t x_22t\n3 2 x_21t x_22t","category":"page"},{"location":"MultipleTimeSeries/","page":"Fitting a model to multiple time series","title":"Fitting a model to multiple time series","text":"Covarate can be added to the models as well. The covarates dataframe must have the same sturcture ","category":"page"},{"location":"MultipleTimeSeries/","page":"Fitting a model to multiple time series","title":"Fitting a model to multiple time series","text":"UniversalDiffEq.MultiNODE(data;kwargs...)","category":"page"},{"location":"MultipleTimeSeries/#UniversalDiffEq.MultiNODE-Tuple{Any}","page":"Fitting a model to multiple time series","title":"UniversalDiffEq.MultiNODE","text":"MultiNODE(data;kwargs...)\n\nbuilds a NODE model to fit to the data. data is a DatFrame object with time arguments placed in a colum labed t and a second colum with a unique index for each time series. The remaining columns have observation of the state variables at each point in time and for each time series.\n\n\n\n\n\n","category":"method"},{"location":"#UniversalDiffEq.jl","page":"UniversalDiffEq.jl","title":"UniversalDiffEq.jl","text":"","category":"section"},{"location":"","page":"UniversalDiffEq.jl","title":"UniversalDiffEq.jl","text":"A library for building nonlinear time series models for ecological data with neural networks. UniversalDiffEq uses the Lux.jl and DiffEqFlux.jl libraries to construct time series models and defines a set of training procedures designed to handle common problems with ecological data, like sparse and noisy observations.","category":"page"},{"location":"#Universal-differential-equations","page":"UniversalDiffEq.jl","title":"Universal differential equations","text":"","category":"section"},{"location":"","page":"UniversalDiffEq.jl","title":"UniversalDiffEq.jl","text":"UniversalDiffEq builds Universal differential equations (UDE), a class of models that uses neural networks to learn a differential equation. For example, we can build a model that uses a Neural network to learn the right-hand side of a system of differential equations","category":"page"},{"location":"","page":"UniversalDiffEq.jl","title":"UniversalDiffEq.jl","text":"fracdxdt = NN(x)","category":"page"},{"location":"","page":"UniversalDiffEq.jl","title":"UniversalDiffEq.jl","text":"It is also possible to create models that combine neural networks with known functional forms. For example, we might use a neural network to learn the interaction term in a predator-prey model based on the Loka-Volterra equations","category":"page"},{"location":"","page":"UniversalDiffEq.jl","title":"UniversalDiffEq.jl","text":"fracdNdt = rN - NN(NP) \nfracdPdt = theta NN(NP) - mP","category":"page"},{"location":"","page":"UniversalDiffEq.jl","title":"UniversalDiffEq.jl","text":"UniversalDiffEq also provides functions to construct models based on difference equations","category":"page"},{"location":"","page":"UniversalDiffEq.jl","title":"UniversalDiffEq.jl","text":"x_t+1 = NN(x)","category":"page"},{"location":"#How-UniversalDiffEq.jl-works","page":"UniversalDiffEq.jl","title":"How UniversalDiffEq.jl works","text":"","category":"section"},{"location":"","page":"UniversalDiffEq.jl","title":"UniversalDiffEq.jl","text":"UniversalDiffEq builds and trains UDEs within a state space modeling framework. State space models describe noisy time series data by combining two models: an observaiton model that describes the relationship between the data and the true underlying state of the system and a process model that describes the changes in the system's state over time. This model structure allows state space models to account for uncertainty caused by noisy observations (observaiton error) and inherent randomness within the system's dynamics (process error).","category":"page"},{"location":"","page":"UniversalDiffEq.jl","title":"UniversalDiffEq.jl","text":"State space models simultaneously estimate the parameters of the process and observation models theta and the value of the state variables at each point in time hatu_t. These parameters are estimated by optimizing a loss function that combines two components, the observaiton loss and the process loss, which evaluate the performance of the state estimates and the process model parameters, respectively. The observation loss compares the state estimates hatu_t to the data x_t using the observation model g(u_t). For example, we can use the mean squared error loss","category":"page"},{"location":"","page":"UniversalDiffEq.jl","title":"UniversalDiffEq.jl","text":"L_obs = frac1T sum_i = 1^T (x_t - g(hatu_ttheta ))^2","category":"page"},{"location":"","page":"UniversalDiffEq.jl","title":"UniversalDiffEq.jl","text":"The process loss is calculated by comparing the predictions of the process model f(u_ttheta) to the estimated states one step ahead again. The mean squared error performs well","category":"page"},{"location":"","page":"UniversalDiffEq.jl","title":"UniversalDiffEq.jl","text":"L_proc = frac1T=-1 sum_i = 2^T(hatu_t - f(hatu_t-1theta ))^2","category":"page"},{"location":"","page":"UniversalDiffEq.jl","title":"UniversalDiffEq.jl","text":"Additional terms can be added to regularize neural network parameters or incorporate prior information","category":"page"},{"location":"","page":"UniversalDiffEq.jl","title":"UniversalDiffEq.jl","text":"L_reg = R(theta)","category":"page"},{"location":"","page":"UniversalDiffEq.jl","title":"UniversalDiffEq.jl","text":"The UniversalDiffEq package combines weighted sums of these three components to create the full loss function","category":"page"},{"location":"","page":"UniversalDiffEq.jl","title":"UniversalDiffEq.jl","text":"L(hatutheta) = omega_obs L_obs + omega_proc L_proc + omega_reg L_reg","category":"page"},{"location":"","page":"UniversalDiffEq.jl","title":"UniversalDiffEq.jl","text":"UniversalDiffEq uses Optimizers.jl to find the state and parameter estimates that minimize the loss function. Currently, two optimization algorithms are available, the ADAM gradient decent algorithm and the quasi-Newton algorithm BFGS.","category":"page"},{"location":"#Package-Contents","page":"UniversalDiffEq.jl","title":"Package Contents","text":"","category":"section"},{"location":"","page":"UniversalDiffEq.jl","title":"UniversalDiffEq.jl","text":"Pages = [\"Models.md\", \"ModelTesting.md\",\"MultipleTimeSeries.md\",\"NutsAndBolts.md\"]","category":"page"},{"location":"Models/#Model-Constructors","page":"Model Constructors","title":"Model Constructors","text":"","category":"section"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"UniversalDiffEq provides a set of functions to construct NODE and UDE with varying levels of customization. The model constructors all require the data to be passed using a DataFrame object from the DataFrames.jl library. The data frame should be organized with a column for time named t, and the remaining columns shoud have the value of the state variables at each point in time.","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"t X_1 X_2\n0.1 0.0 -1.1\n0.2 0.01 -0.9\n0.5 0.51 -1.05","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"Table: Example data set with two state variables","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"Currently, missing data are not supported, but irregular intervals between time points are allowed.","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"Each constructor function will require additional inputs to specify the model structure. For example, the CustomDerivatives function requires the user to supply the known functional forms through the derivs! argument. These arguments are described in detail in the subsection for each model type.","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"Finally, the constructor functions share a set of key work arguments used to tune the model fitting procedure. These control the weight given to the process model, observaiton model and regularization in the loss function and can be tuned to control the complexity of the estimated model and to accommodate varying levels of observational errors:","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"proc_weight=1.0 : The weight given to the model predictions in loss function\nobs_weight=1.0 : The weight given to the state estimates in loss function\nreg_weight=0.0 : The weight given to regularization in the loss function.","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"In addition to these weighting parameters, two key work arguments, l = 0.25 and extrap_rho = 0.0, controls how the model extapolates beyond the observed data. The parameter l defines how far away the model will extrapolate before shifting to the default behavior and extrap_rho defines the default when extrapolating. When forecasting, the model will modify the trained process model f(u_ttheta) when extrapolating to a new function the combines the fitted model and the default behavior","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"barf(u_tthetalrho )=   left\nbeginarrayll\n      f(u_ttheta)  min(hatu)  u_t  max(hatu) \n      e^(fracu_t - min(hatu_t)l)^2f(u_ttheta) + (1-e^(fracu_t - min(hatu_t)l)^2) rho u_t  min(hatu) \n      e^(fracu_t - max(hatu_t)l)^2f(u_ttheta) - (1-e^(fracu_t - min(hatu_t)l)^2) rho u_t  max(hatu) \nendarray \nright  ","category":"page"},{"location":"Models/#NODES-and-NNDE","page":"Model Constructors","title":"NODES and NNDE","text":"","category":"section"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"NODEs and NNDEs use neural networks to build fully nonparametric models in continuous and discrete time respectively. NODEs use a neural network as the right hand side of a differntial equation ","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"   fracdxdt = NN(xwb)","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"and NNDE use a neural network as the right hand side of a differnce equation","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"   x_t+1 = x_t + NN(x_t)","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"The NODE and NNDE function construct each model type.","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"UniversalDiffEq.NODE(data;kwargs ... )\nUniversalDiffEq.NNDE(data;kwargs ...)","category":"page"},{"location":"Models/#UniversalDiffEq.NODE-Tuple{Any}","page":"Model Constructors","title":"UniversalDiffEq.NODE","text":"NODE(data;kwargs ... )\n\nConstructs a nonparametric continuous time model for the data set data using a single layer neural network to represent the systems dynamics. \n\n\n\n\n\n","category":"method"},{"location":"Models/#UniversalDiffEq.NNDE-Tuple{Any}","page":"Model Constructors","title":"UniversalDiffEq.NNDE","text":"NNDE(data;kwargs ...)\n\nConstructs a nonparametric discrete time model for the data set data using a single layer neural network to reporesent the systems dynamics. \n\n\n\n\n\n","category":"method"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"Covariates can be added to the model by supplying a second data frame X This data frame must have the same format as the primary data set, but the time points need not match. The NODE and NNDE functions will append the value of the covarates at each point in time to the nerual network inputs","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"   fracdxdt = NN(xX(t)wb) \n   x_t+1 = x_t + NN(x_t X(t))","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"The value of the covarates between time point included in the data frame X are interpolated using a linear spline.  ","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"UniversalDiffEq.NODE(data,X;kwargs ... )","category":"page"},{"location":"Models/#UniversalDiffEq.NODE-Tuple{Any, Any}","page":"Model Constructors","title":"UniversalDiffEq.NODE","text":"NODE(data,X;kwargs ... )\n\nWhen a dataframe X is supplied the model will run with covariates. the argumetn X should have a column for time t with the value fo time in the remaining columns. The values in X will be interpolated with a linear spline for value of time not included in the data frame. \n\n\n\n\n\n","category":"method"},{"location":"Models/#UDEs","page":"Model Constructors","title":"UDEs","text":"","category":"section"},{"location":"Models/#Continuous-time-model","page":"Model Constructors","title":"Continuous time model","text":"","category":"section"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"The CustomDerivatives and CustomDifference function can be used to build models that combine nerual networks and known functional forms. These function take user defined models and consturct a loss function and provide access to the model fitting and testing functions provided by UniversalDiffEq.","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"The CustomDerivatives function build UDE models based on a user defined function derivs!(du,u,p,t), which updates the vector du with the right hand side of a differntial equation evaluated at time t in state u given parameters p. The function also needs an initial guess at the model paramters, specified by a NamedTuple initial_parameters","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"UniversalDiffEq.CustomDerivatives(data,derivs!,initial_parameters;kwargs ... )","category":"page"},{"location":"Models/#UniversalDiffEq.CustomDerivatives-Tuple{Any, Any, Any}","page":"Model Constructors","title":"UniversalDiffEq.CustomDerivatives","text":"CustomDerivatives(data,derivs!,initial_parameters;kwargs ... )\n\nConstructs a UDE model for the data set data  based on user defined derivitivs derivs. An initial guess of model parameters are supplied with the initia_parameters argument. \n\n...\n\nArguments\n\ndata: a DataFrame object with the time of observations in a column labeled t and the remaining columns the value of the state variables at each time point. \nderivs: a Function of the form derivs!(du,u,p,t) where u is the value of the state variables, p are the model parameters, t is time, and du is updated with the value of the derivitives\ninit_parameters: A NamedTuple with the model parameters. Neural network parameters must be listed under the key NN.\n\n...\n\n\n\n\n\n","category":"method"},{"location":"Models/#Example","page":"Model Constructors","title":"Example","text":"","category":"section"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"The following block of code shows how to build UDE model based on the loka volterra predator prey model where the growth rate of the prey r, mortaltiy rate of the predatory m and conversion efficency theta are estiamted and the predation rate is described by a neural network NN. The resulting ODE is defined by ","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"fracdNdt = rN - NN(NP) \nfracdPdt = theta NN(NP) - mP","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"To implemnt the model we start by defining he neural network object using the Lux.Chain funciton, ","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"using Lux\n# Build the neurla network with lux Chain \ndims_in = 2\nhidden_units = 10\nnonlinearity = tanh\ndims_out = 1\nNN = Lux.Chain(Lux.Dense(dims_in,hidden_units,nonlinearity),Lux.Dense(hidden_units,dims_out))\n\n# initialize the neurla network states and paramters \nusing Random\nrng = Random.default_rng() \nNNparameters, states = Lux.setup(rng,NN) ","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"New we can define the model derivatives using the usual julia functions syntax. The derivs function first evaluates the neural network given the abundance of the predators and prey in the vector u. The neurla network fucntion NN requires three arguments the current state, he newtork parameters and the network states. In this example, the wieghts and biases are accessed through the paramters NamedTupe p with the key NN. The other model parameters are accessed with key corresponding to their respective names.","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"function loka_volterra_derivs!(du,u,p,t)\n    C, states = NN(u,p.NN, states) \n    du[1] = p.r*u[1] - C[1]\n    du[2] = p.theta*C[1] -p.m*u[2]\nend","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"Finally, we can define the initial paramters as a named tuple and build the model using the CustomDerivatives function.","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"using UniversalDiffEq\ninitial_parameters = (NN = NNparameters,r = 1.0,m=0.5,theta=0.5)\nmodel = CustomDerivatives(data,loka_volterra_derivs!,initial_parameters)","category":"page"},{"location":"Models/#Discrete-time-model","page":"Model Constructors","title":"Discrete time model","text":"","category":"section"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"Discrete time models are onstructed ina similar way to continous time models. The user provides the right hand side of a differnce equation with the function step and initial paramters. The function step(u,t,p) takes three arguments the value of the state variables u, time t and model paramters p.","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"UniversalDiffEq.CustomDiffernce(data,step,initial_parameters;kwrags...)","category":"page"},{"location":"Models/#UniversalDiffEq.CustomDiffernce-Tuple{Any, Any, Any}","page":"Model Constructors","title":"UniversalDiffEq.CustomDiffernce","text":"CustomDiffernce(data,step,initial_parameters;kwrags...)\n\nConstructs a UDE model for the data set data based on user defined difference equation step. An initial guess of model parameters are supplied with the initia_parameters argument. ...\n\nArguments\n\ndata: a DataFrame object with the time of observations in a column labeled t and the remaining columns the value of the state variables at each time point. \nstep: a Function of the form step(u,t,p) where u is the value of the state variables, p are the model parameters.\ninit_parameters: A NamedTuple with the model parameters. Neural network parameters must be listed under the key NN.\n\n...\n\n\n\n\n\n","category":"method"},{"location":"Models/#Adding-Covariates","page":"Model Constructors","title":"Adding Covariates","text":"","category":"section"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"Covariates can also be added to UDE models by passing a data frame X and adding covariates as an argument to the derivs! function which has the new form derivs!(du,u,X,p,t), where the third argument X are a vector of covariates. ","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"UniversalDiffEq.CustomDerivatives(data,X,derivs!,initial_parameters;kwargs ... )","category":"page"},{"location":"Models/#UniversalDiffEq.CustomDerivatives-NTuple{4, Any}","page":"Model Constructors","title":"UniversalDiffEq.CustomDerivatives","text":"CustomDerivatives(data,X,derivs!,initial_parameters;kwargs ... )\n\nWhen a dataframe X is supplied the model will run with covariates. the argumetn X should have a column for time t with the vlaue fo time in the remaining columns. The values in X will be interpolated with a linear spline for value of time not included int he data frame. \n\nWhen X is provided the derivs function must have the form derivs!(du,u,x,p,t) where x is a vector with the value of the coarates at time t. \n\n\n\n\n\n","category":"method"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"Covarates can also be added to discrete time framework in the same way. the step function should have four arguments step(u,X,t,).","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"UniversalDiffEq.CustomDiffernce(data,X,step,initial_parameters;kwargs ... )","category":"page"},{"location":"Models/#UniversalDiffEq.CustomDiffernce-NTuple{4, Any}","page":"Model Constructors","title":"UniversalDiffEq.CustomDiffernce","text":"CustomDiffernce(data,X,step,initial_parameters;kwargs ... )\n\nWhen a dataframe X is supplied the model will run with covariates. the argumetn X should have a column for time t with the vlaue fo time in the remaining columns. The values in X will be interpolated with a linear spline for value of time not included int he data frame. \n\nWhen X is provided the step function must have the form step(u,x,t,p) where x is a vector with the value of the coarates at time t. \n\n\n\n\n\n","category":"method"},{"location":"Models/#Example-2","page":"Model Constructors","title":"Example","text":"","category":"section"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"To show how adding covartes can work the following example extends the loka volterra equations defined above to incorperate a covariate X that influences the abunance of predators and prey. We can model this as a linear effect with coeficents beta_N and beta_P","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"fracdNdt = rN - NN(NP) + beta_N N \nfracdPdt = theta NN(NP) - mP + beta_P P","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"# set up neural network \nusing Lux\ndims_in = 2\nhidden_units = 10\nnonlinearity = tanh\ndims_out = 1\nNN = Lux.Chain(Lux.Dense(dims_in,hidden_units,nonlinearity),Lux.Dense(hidden_units,dims_out))\n\n# initialize parameters \nusing Random\nrng = Random.default_rng() \nNNparameters, NNstates = Lux.setup(rng,NN) \n\nfunction derivs!(du,u,X,p,t)\n    C, states = NN(u,p.NN, NNstates) # NNstates are\n    du[1] = p.r*u[1] - C[1] + p.beta[1] * X[1]\n    du[2] = p.theta*C[1] -p.m*u[2] + p.beta[2] * X[1]\nend\n\ninit_parameters = (NN = NNparameters,r = 1.0,m=0.5,theta=0.5, beta = [0,0])\n\n\nmodel = CustomDerivatives(training_data,X,derivs!;init_parameters;proc_weight=2.0,obs_weight=0.5,reg_weight=10^-4)\nnothing","category":"page"},{"location":"Models/#Other-functions","page":"Model Constructors","title":"Other functions","text":"","category":"section"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"UniversalDiffEq.DiscreteUDE(data,step,init_parameters;kwargs ...)\n\nUniversalDiffEq.UDE(data,derivs,init_parameters;kwargs...)","category":"page"},{"location":"Models/#UniversalDiffEq.DiscreteUDE-Tuple{Any, Any, Any}","page":"Model Constructors","title":"UniversalDiffEq.DiscreteUDE","text":"DiscreteUDE(data,step,init_parameters;kwargs ...)\n\nConstructs an additive UDE model with user supplied difference equations step and a single layer neural network. When init_parameters are provided for the use supplied function their values will be estiated in the training process.  \n\nModel equaitons\n\nx_t+1 = f(x_t\theta) + NN(x_twb)\n\n...\n\nKey word arguments\n\nproc_weight=1.0 : Weight given to the model predictiosn in loss funciton\nobs_weight=1.0 : Weight given to the state estiamtes in loss function \nreg_weight=10^-6 : Weight given to regularization in the loss function \nextrap_rho=0.0 : Asymthotic value of derivitives when extrapolating (negative when extrapolating higher than past observaitons, postive when extrapolating lower)\nl=0.25 : rate at which extrapolations converge on asymthotic behavior\n\n...\n\n\n\n\n\n","category":"method"},{"location":"Models/#UniversalDiffEq.UDE-Tuple{Any, Any, Any}","page":"Model Constructors","title":"UniversalDiffEq.UDE","text":"UDE(data,derivs,init_parameters;kwargs...)\n\nConstructs an additive continuous time UDE model with user supplied derivitives step and a single layer neural network. When init_parameters are provided for the user supplied function their values will be estiated during model training. \n\nModel equaitons\n\ndxdt = f(x\theta) + NN(xwb)\n\n...\n\nKey word arguments\n\nproc_weight=1.0 : Weight given to the model predictiosn in loss funciton\nobs_weight=1.0 : Weight given to the state estiamtes in loss function \nreg_weight=10^-6 : Weight given to regularization in the loss function \nextrap_rho=0.0 : Asymthotic value of derivitives when extrapolating (negative when extrapolating higher than past observaitons, postive when extrapolating lower)\nl=0.25 : rate at which extrapolations converge on asymthotic behavior\n\n...\n\n\n\n\n\n","category":"method"}]
}
