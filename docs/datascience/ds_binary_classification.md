# Top 10 Binary Classification Algorithms
How to implement the 10 most important binary classification algorithms with a few lines of Python.
A beginner's guide. Published originaly in a [Medium Article](https://medium.com/@alex.ortner.1982/top-10-binary-classification-algorithms-a-beginners-guide-feeacbd7a3e2) in May 2020

October 2020


## Introduction
Binary classification problems can be solved by a variety of machine learning algorithms ranging from Naive Bayes to deep learning networks. Which solution performs best in terms of runtime and accuracy depends on the data volume (number of samples and features) and data quality (outliers, imbalanced data).

This article provides an overview and code examples you can easily try out yourself. The aim is to get first working results with Python quickly. I will keep things short here and will explain each algorithm in detail. I have added references to each algorithm in case you want to understand more about the algorithm, its underlying theory and how to tune its parameters.

In this article, we will focus on the top 10 most common binary classification algorithms:


1. Naive Bayes
2. Logistic Regression
3. K-Nearest Neighbours
4. Support Vector Machine
5. Decision Tree
6. Bagging Decision Tree (Ensemble Learning I)
7. Boosted Decision Tree (Ensemble Learning II)
8. Random Forest (Ensemble Learning III)
9. Voting Classification (Ensemble Learning IV)
10. Neural Network (Deep Learning)

To keep things as simple as possible, we will only use three Python libraries in this tutorial: [*Numpy*](https://numpy.org/), [*Sklearn*](https://scikit-learn.org/) and [*Keras*](https://keras.io/).

In the code examples, I always import the necessary Python module right on top of the the code snippet to make clear that it is used next. You can load them all in the beginning of your script.
I have created a Jupyter Notebook with all the code that you can find in my Github repository: [https://github.com/alexortner/teaching/tree/master/binary_classification](https://github.com/alexortner/teaching/tree/master/binary_classification)