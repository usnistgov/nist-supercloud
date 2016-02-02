# Vagrant Supercloud Monitor

This project can be setup with Vagrant to create a virtual development environment.

The Vagrant setup creates virtual machines to recreate the real environment.

The following VMs are setup:
- monitor
- agent1
- agent2
- monitor storage
- dashboard front-end / back-end (not setup yet)

## Installation

1. copy the vagrant-config folder and the Vagrantfile in the nist-supercloud parent folder
2. download and install Virtualbox (Vagrant uses Virtualbox to create and manage VMs)
3. download and install Vagrant 

## Vagrant commands

- vagrant status
lists the status of the VMs

- vagrant up <VM_NAME>
starts a VM specific. If no VM_NAME then all VMs are started

- vagrant halt <VM_NAME> 
stops a VM specific. If no VM_NAME then all VMs are stoped

