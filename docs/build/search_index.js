var documenterSearchIndex = {"docs":
[{"location":"","page":"-","title":"-","text":"Modules = [UniversalDiffEq]","category":"page"},{"location":"#UniversalDiffEq.UDE-Tuple{Any, Any, Any}","page":"-","title":"UniversalDiffEq.UDE","text":"UDE(data,derivs,init_parameters;kwargs...)\n\nConstructs an additive continuous time UDE model with user supplied derivitives step and a single layer neural network. When init_parameters are provided for the user supplied function their values will be estiated during model training. \n\nModel equaitons\n\n    \fracdxdt = f(x\theta) + NN(xwb)\n\n...\n\nKey word arguments\n\nproc_weight=1.0 : Weight given to the model predictiosn in loss funciton\nobs_weight=1.0 : Weight given to the state estiamtes in loss function \nreg_weight=10^-6 : Weight given to regularization in the loss function \nextrap_rho=0.0 : Asymthotic value of derivitives when extrapolating (negative when extrapolating higher than past observaitons, postive when extrapolating lower)\nl=0.25 : rate at which extrapolations converge on asymthotic behavior\n\n...\n\n\n\n\n\n","category":"method"},{"location":"#UniversalDiffEq.CustomDerivatives-Tuple{Any, Any, Any}","page":"-","title":"UniversalDiffEq.CustomDerivatives","text":"CustomDerivatives(data,derivs!,initial_parameters;kwargs ... )\n\nConstructs a UDE model for the data set data  based on user defined derivitivs derivs. An initial guess of model parameters are supplied with the initia_parameters argument.\n\n...\n\nArguments\n\ndata: a DataFrame object with the time of observations in a column labeled t and the remaining columns the value of the state variables at each time point. \nderivs: a Function of the form derivs!(du,u,p,t) where u is the value of the state variables, p are the model parameters, t is time, and du is updated with the value of the derivitives\ninit_parameters: A NamedTuple with the model parameters. Neural network parameters must be listed under the key NN.\n\nKey word arguments\n\nproc_weight=1.0 : Weight given to the model predictiosn in loss funciton\nobs_weight=1.0 : Weight given to the state estiamtes in loss function \nreg_weight=10^-6 : Weight given to regularization in the loss function \nextrap_rho=0.0 : Asymthotic value of derivitives when extrapolating (negative when extrapolating higher than past observaitons, postive when extrapolating lower)\nl=0.25 : rate at which extrapolations converge on asymthotic behavior\n\n...\n\n\n\n\n\n","category":"method"},{"location":"#UniversalDiffEq.CustomDiffernce-Tuple{Any, Any, Any}","page":"-","title":"UniversalDiffEq.CustomDiffernce","text":"CustomDiffernce(data,derivs,initial_parameters;kwrags...)\n\nConstructs a UDE model for the data set data based on user defined difference equation step. An initial guess of model parameters are supplied with the initia_parameters argument.\n\ndata: a DataFrame object with the time of observations in a column labeled t and the remaining columns the value of the state variables at each time point. \nstep: a Function of the form step(u,p) where u is the value of the state variables, p are the model parameters.\ninit_parameters: A NamedTuple with the model parameters. Neural network parameters must be listed under the key NN.\n\n...\n\nKey word arguments\n\nproc_weight=1.0 : Weight given to the model predictiosn in loss funciton\nobs_weight=1.0 : Weight given to the state estiamtes in loss function \nreg_weight=10^-6 : Weight given to regularization in the loss function \nextrap_rho=0.0 : Asymthotic value of derivitives when extrapolating (negative when extrapolating higher than past observaitons, postive when extrapolating lower)\nl=0.25 : rate at which extrapolations converge on asymthotic behavior\n\n...\n\n\n\n\n\n","category":"method"},{"location":"#UniversalDiffEq.DiscreteUDE-Tuple{Any, Any, Any}","page":"-","title":"UniversalDiffEq.DiscreteUDE","text":"DiscreteUDE(data,step,init_parameters;kwargs ...)\n\nConstructs an additive UDE model with user supplied difference equations step and a single layer neural network. When init_parameters are provided for the use supplied function their values will be estiated in the training process.  \n\nModel equaitons\n\nx_t+1 = f(x_t\theta) + NN(x_twb)\n\n...\n\nKey word arguments\n\nproc_weight=1.0 : Weight given to the model predictiosn in loss funciton\nobs_weight=1.0 : Weight given to the state estiamtes in loss function \nreg_weight=10^-6 : Weight given to regularization in the loss function \nextrap_rho=0.0 : Asymthotic value of derivitives when extrapolating (negative when extrapolating higher than past observaitons, postive when extrapolating lower)\nl=0.25 : rate at which extrapolations converge on asymthotic behavior\n\n...\n\n\n\n\n\n","category":"method"},{"location":"#UniversalDiffEq.NNDE-Tuple{Any}","page":"-","title":"UniversalDiffEq.NNDE","text":"NNDE(data;kwargs ...)\n\nConstructs a nonparametric discrete time model for the data set data using a single layer neural network to reporesent the systems dynamics. \n\nModel equations\n\nx_t+1 = NN(x_twb)\n\n...\n\nArguments\n\ndata: a DataFrame object with the time of observations in a column labeled t and the remaining columns the value of the state variables at each time point. \n\nKey word arguments\n\nproc_weight=1.0 : Weight given to the model predictiosn in loss funciton\nobs_weight=1.0 : Weight given to the state estiamtes in loss function \nreg_weight=10^-6 : Weight given to regularization in the loss function \nextrap_rho=0.0 : Asymthotic value of derivitives when extrapolating (negative when extrapolating higher than past observaitons, postive when extrapolating lower)\nl=0.25 : rate at which extrapolations converge on asymthotic behavior\n\n...\n\n\n\n\n\n","category":"method"},{"location":"#UniversalDiffEq.NODE-Tuple{Any}","page":"-","title":"UniversalDiffEq.NODE","text":"NODE(data;kwargs ... )\n\nConstructs a nonparametric continuous time model for the data set data using a single layer neural network to represent the systems dynamics. \n\nModel equations\n\n    \fracdxdt = NN(xwb)\n\n...\n\nArguments\n\ndata: a DataFrame object with the time of observations in a column labeled t and the remaining columns the value of the state variables at each time point.\n\nKey word arguments\n\nproc_weight=1.0 : Weight given to the model predictiosn in loss funciton\nobs_weight=1.0 : Weight given to the state estiamtes in loss function \nreg_weight=10^-6 : Weight given to regularization in the loss function \nextrap_rho=0.0 : Asymthotic value of derivitives when extrapolating (negative when extrapolating higher than past observaitons, postive when extrapolating lower)\nl=0.25 : rate at which extrapolations converge on asymthotic behavior\n\n...\n\n\n\n\n\n","category":"method"}]
}
