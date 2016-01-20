# nist-supercloud

Welcome the NIST Supercloud space.
In this repository we will add NIST contribution to the Supercloud project developed at Cornell University.

## Supercloud (source http://fireless.cs.cornell.edu/supercloud/)
VM migration is a technique that cloud managers use to re-balance load in the face of multiple tenants sharing 
computing resources and to offload machines when upgrading hardware. VM migration is transparent to applications. 
Supercloud is a Library Cloud that provides a user-level VM migration primitive, and can glue together one or more 
availability zones within a cloud provider or across different cloud providers. Applications control VM placement 
and migration within availability zones or across. Unlike conventional VM placement, application-level VM placement 
does not specify the underlying machine, but it can specify the availability zone and whether two VMs should be 
co-located on the same machine (and possibly rack) or not. 


## Build & development

Run `grunt` for building 

`node server/server.js` to run the rest service as a server.

`grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## tools

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## libraries

[Enable All CORS Requests](https://www.npmjs.com/package/cors)  
[SmoothieCharts](http://smoothiecharts.org)  is used as a chart library 
