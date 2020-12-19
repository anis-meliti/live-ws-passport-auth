pipeline {
    environment {
        registry = 'ansmeliti/first-demo-app'
        registryCredential = '7a8f8b15-43a1-4385-9ad4-aecc5b327400'
        dockerImage = ''
    }
    agent any
    stages {
        stage('Cloning our Git') {
            steps {
                git 'https://github.com/anis-meliti/devops-app.git'
            }
        }
        stage('Building our image') {
            steps {
                script {
                    dockerImage = docker.build( registry + ":$BUILD_NUMBER", '.')
                }
            }
        }
        stage('Deploy our image') {
            steps {
                script {
                    docker.withRegistry( '', registryCredential ) {
                        dockerImage.push()
                    }
                }
            }
        }

        stage('Cleaning up') {
            steps {
                sh "docker rmi $registry:$BUILD_NUMBER"
            }
        }
    }
}
