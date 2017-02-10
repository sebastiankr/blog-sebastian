(function() {		
        var app = angular.module('interventionApp', ['ui.slider']);

		app.controller('interventionCtrl', function($scope, $log) {
		
			
			 // Slider options with event handlers
			$scope.slider = {
			    'options': {
			        start: function (event, ui) {
                        
			            $log.info('Event: Slider start - set with slider options', event);
			        },
			        stop: function (event, ui) {
			            $log.info('Event: Slider stop - set with slider options', event);
                        //$scope.interventions = getInterventions($scope.members);
			        }
			    }
			}


            // states of gaps: "open", "closed"
            // states of interventions 'successful', 'unsuccessful'
            $scope.members = [
                {Name: "Adrian Adams", 
                   Gaps: [{Name: "AAA", Start: new Date('2014-01-02'), End: new Date('2014-03-02'), Value: 360, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.6834, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "ASM", Start: new Date('2014-02-02'), End: new Date('2014-06-02'), Value: 560, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.7134, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "MSC", Start: new Date('2014-05-02'), End: new Date('2014-07-02'), Value: 630, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "COL", Start: new Date('2014-08-02'), End: new Date('2014-12-02'), Value: 730, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]}
                         ]
                },
                {Name: "Brian Brooks", 
                   Gaps: [{Name: "AMM", Start: new Date('2014-01-02'), End: new Date('2014-03-02'), Value: 360, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.6634, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7834, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.9894, Cost: 280}
                                               ]},
                          {Name: "DMD", Start: new Date('2014-02-02'), End: new Date('2014-06-02'), Value: 560, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.6134, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7934, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.954, Cost: 280}
                                               ]},
                          {Name: "DDI", Start: new Date('2014-02-02'), End: new Date('2014-07-02'), Value: 630, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.89134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "ARV", Start: new Date('2014-05-02'), End: new Date('2014-07-02'), Value: 630, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "PBH", Start: new Date('2014-05-02'), End: new Date('2014-11-02'), Value: 630, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},                          
                          {Name: "CMR", Start: new Date('2014-08-02'), End: new Date('2014-12-02'), Value: 730, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9434, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.974, Cost: 280}
                                               ]}
                         ]
                },
                {Name: "Cecillia Citron", 
                   Gaps: [{Name: "HRM", Start: new Date('2014-09-02'), End: new Date('2014-12-02'), Value: 360, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.6834, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "PNU", Start: new Date('2014-07-02'), End: new Date('2014-12-02'), Value: 560, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.7134, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]}
                         ]
                },
                {Name: "David Doodle", 
                   Gaps: [{Name: "CDC-E", Start: new Date('2014-01-02'), End: new Date('2014-07-02'), Value: 360, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.7734, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7334, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.924, Cost: 280}
                                               ]},
                          {Name: "CDC-N", Start: new Date('2014-02-02'), End: new Date('2014-06-02'), Value: 560, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.6934, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "CDC-H", Start: new Date('2014-05-02'), End: new Date('2014-09-02'), Value: 239, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.94834, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.9874, Cost: 280}
                                               ]},
                          {Name: "MUI", Start: new Date('2014-05-02'), End: new Date('2014-11-02'), Value: 576, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.944, Cost: 280}
                                               ]},                         
                          {Name: "CDC-L", Start: new Date('2014-08-02'), End: new Date('2014-12-02'), Value: 730, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.8834, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.934, Cost: 280}
                                               ]}
                         ]
                },
                {Name: "Eddy Edision", 
                   Gaps: [{Name: "AAA", Start: new Date('2014-01-02'), End: new Date('2014-03-02'), Value: 360, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.6834, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "ASM", Start: new Date('2014-02-02'), End: new Date('2014-06-02'), Value: 560, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.7134, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "MSC", Start: new Date('2014-05-02'), End: new Date('2014-07-02'), Value: 630, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "COL", Start: new Date('2014-08-02'), End: new Date('2014-12-02'), Value: 730, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]}
                         ]
                },
                {Name: "Fabian Fiddle", 
                   Gaps: [{Name: "AAA", Start: new Date('2014-01-02'), End: new Date('2014-03-02'), Value: 360, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.6834, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "ASM", Start: new Date('2014-02-02'), End: new Date('2014-06-02'), Value: 560, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.7134, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "MSC", Start: new Date('2014-05-02'), End: new Date('2014-07-02'), Value: 630, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "COL", Start: new Date('2014-08-02'), End: new Date('2014-12-02'), Value: 730, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]}
                         ]
                },
                {Name: "Greogory Grok", 
                   Gaps: [{Name: "AMM", Start: new Date('2014-01-02'), End: new Date('2014-03-02'), Value: 360, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.6634, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7834, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.9894, Cost: 280}
                                               ]},
                          {Name: "DMD", Start: new Date('2014-02-02'), End: new Date('2014-06-02'), Value: 560, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.6134, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7934, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.954, Cost: 280}
                                               ]},
                          {Name: "DDI", Start: new Date('2014-02-02'), End: new Date('2014-07-02'), Value: 630, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.89134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "ARV", Start: new Date('2014-05-02'), End: new Date('2014-07-02'), Value: 630, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "PBH", Start: new Date('2014-05-02'), End: new Date('2014-11-02'), Value: 630, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},                          
                          {Name: "CMR", Start: new Date('2014-08-02'), End: new Date('2014-12-02'), Value: 730, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9434, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.974, Cost: 280}
                                               ]}
                         ]
                },
                {Name: "Hillary Hicks", 
                   Gaps: [{Name: "HRM", Start: new Date('2014-09-02'), End: new Date('2014-12-02'), Value: 360, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.6834, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "PNU", Start: new Date('2014-07-02'), End: new Date('2014-12-02'), Value: 560, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.7134, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]}
                         ]
                },
                {Name: "Isha Indie", 
                   Gaps: [{Name: "CDC-E", Start: new Date('2014-01-02'), End: new Date('2014-07-02'), Value: 360, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.7734, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7334, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.924, Cost: 280}
                                               ]},
                          {Name: "CDC-N", Start: new Date('2014-02-02'), End: new Date('2014-06-02'), Value: 560, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.6934, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "CDC-H", Start: new Date('2014-05-02'), End: new Date('2014-09-02'), Value: 239, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.94834, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.9874, Cost: 280}
                                               ]},
                          {Name: "MUI", Start: new Date('2014-05-02'), End: new Date('2014-11-02'), Value: 576, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.944, Cost: 280}
                                               ]},                         
                          {Name: "CDC-L", Start: new Date('2014-08-02'), End: new Date('2014-12-02'), Value: 730, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.8834, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.934, Cost: 280}
                                               ]}
                         ]
                },
                {Name: "Jack Jubbi", 
                   Gaps: [{Name: "AAA", Start: new Date('2014-01-02'), End: new Date('2014-03-02'), Value: 360, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.6834, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "ASM", Start: new Date('2014-02-02'), End: new Date('2014-06-02'), Value: 560, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.7134, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "MSC", Start: new Date('2014-05-02'), End: new Date('2014-07-02'), Value: 630, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "COL", Start: new Date('2014-08-02'), End: new Date('2014-12-02'), Value: 730, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]}
                         ]
                },
                {Name: "Kobe Kenobi", 
                   Gaps: [{Name: "CDC-N", Start: new Date('2014-01-02'), End: new Date('2014-03-02'), Value: 360, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.6834, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "ASM", Start: new Date('2014-01-02'), End: new Date('2014-06-02'), Value: 560, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.7134, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "MSC", Start: new Date('2014-01-02'), End: new Date('2014-07-02'), Value: 630, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "COL", Start: new Date('2014-01-02'), End: new Date('2014-12-02'), Value: 730, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]}
                         ]
                },
                {Name: "Ismael Ikky", 
                   Gaps: [{Name: "CDC-N", Start: new Date('2014-03-02'), End: new Date('2014-03-02'), Value: 343, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.6834, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "ASM", Start: new Date('2014-03-02'), End: new Date('2014-06-02'), Value: 572, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.7134, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "MSC", Start: new Date('2014-03-02'), End: new Date('2014-07-02'), Value: 618, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "COL", Start: new Date('2014-03-02'), End: new Date('2014-12-02'), Value: 745, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]}
                         ]
                },
                {Name: "Larry Leffers", 
                   Gaps: [{Name: "CDC-N", Start: new Date('2014-01-02'), End: new Date('2014-03-02'), Value: 843, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.6834, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "ASM", Start: new Date('2014-03-03'), End: new Date('2014-06-02'), Value: 772, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.7134, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "MSC", Start: new Date('2014-06-03'), End: new Date('2014-07-02'), Value: 918, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "COL", Start: new Date('2014-07-03'), End: new Date('2014-12-02'), Value: 845, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]}
                         ]
                },
                {Name: "Mandy Macy", 
                   Gaps: [{Name: "CDC-N", Start: new Date('2014-01-02'), End: new Date('2014-03-02'), Value: 843, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.6834, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "ASM", Start: new Date('2014-03-03'), End: new Date('2014-06-02'), Value: 772, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.7134, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "MSC", Start: new Date('2014-06-03'), End: new Date('2014-07-02'), Value: 918, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "COL", Start: new Date('2014-07-03'), End: new Date('2014-12-02'), Value: 845, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]}
                         ]
                },
                {Name: "Nancy Nadine", 
                   Gaps: [{Name: "CDC-N", Start: new Date('2014-01-02'), End: new Date('2014-03-02'), Value: 843, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.6834, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "ASM", Start: new Date('2014-03-03'), End: new Date('2014-06-02'), Value: 772, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.7134, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "MSC", Start: new Date('2014-06-03'), End: new Date('2014-07-02'), Value: 918, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "COL", Start: new Date('2014-07-03'), End: new Date('2014-12-02'), Value: 845, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]}
                         ]
                },
                {Name: "Olando Ortis", 
                   Gaps: [{Name: "CDC-N", Start: new Date('2014-01-02'), End: new Date('2014-03-02'), Value: 843, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.6834, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "ASM", Start: new Date('2014-03-03'), End: new Date('2014-06-02'), Value: 772, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.7134, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "MSC", Start: new Date('2014-06-03'), End: new Date('2014-07-02'), Value: 918, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "COL", Start: new Date('2014-07-03'), End: new Date('2014-12-02'), Value: 845, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]}
                         ]
                },
                {Name: "Peter Pan", 
                   Gaps: [{Name: "CDC-N", Start: new Date('2014-01-02'), End: new Date('2014-03-02'), Value: 843, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.6834, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "ASM", Start: new Date('2014-03-03'), End: new Date('2014-06-02'), Value: 772, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.7134, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "MSC", Start: new Date('2014-06-03'), End: new Date('2014-07-02'), Value: 918, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "COL", Start: new Date('2014-07-03'), End: new Date('2014-12-02'), Value: 845, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]}
                         ]
                },
                {Name: "Quant Qotis", 
                   Gaps: [{Name: "CDC-N", Start: new Date('2014-01-02'), End: new Date('2014-03-02'), Value: 843, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.6834, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "ASM", Start: new Date('2014-03-03'), End: new Date('2014-06-02'), Value: 772, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.7134, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "MSC", Start: new Date('2014-06-03'), End: new Date('2014-07-02'), Value: 918, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "COL", Start: new Date('2014-07-03'), End: new Date('2014-12-02'), Value: 845, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]}
                         ]
                },
                {Name: "Rick Richy", 
                   Gaps: [{Name: "CDC-N", Start: new Date('2014-01-02'), End: new Date('2014-03-02'), Value: 843, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.6834, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "ASM", Start: new Date('2014-03-03'), End: new Date('2014-06-02'), Value: 772, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.7134, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "MSC", Start: new Date('2014-06-03'), End: new Date('2014-07-02'), Value: 918, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "COL", Start: new Date('2014-07-03'), End: new Date('2014-12-02'), Value: 845, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]}
                         ]
                },
                {Name: "Steven Stiffens", 
                   Gaps: [{Name: "CDC-N", Start: new Date('2014-01-02'), End: new Date('2014-03-02'), Value: 843, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.6834, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "ASM", Start: new Date('2014-03-03'), End: new Date('2014-06-02'), Value: 772, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.7134, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "MSC", Start: new Date('2014-06-03'), End: new Date('2014-07-02'), Value: 918, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "COL", Start: new Date('2014-07-03'), End: new Date('2014-12-02'), Value: 845, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]}
                         ]
                },
                {Name: "Tom Tubbles", 
                   Gaps: [{Name: "CDC-N", Start: new Date('2014-01-02'), End: new Date('2014-03-02'), Value: 843, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.6834, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "ASM", Start: new Date('2014-03-03'), End: new Date('2014-06-02'), Value: 772, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.7134, Cost: 20},
                                                {Name: "MEOT", SuccessProbability: 0.7234, Cost: 34},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "MSC", Start: new Date('2014-06-03'), End: new Date('2014-07-02'), Value: 918, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]},
                          {Name: "COL", Start: new Date('2014-07-03'), End: new Date('2014-12-02'), Value: 845, state: 'open',
                          GapInterventionTypes:[{Name: "MEOM", SuccessProbability: 0.9134, Cost: 20},
                                                {Name: "IHA", SuccessProbability: 0.994, Cost: 280}
                                               ]}
                         ]
                }                        
                           
            ];
        

        
    
            $scope.ihaWeight = 1;
            $scope.meotWeight = 1;
            $scope.meomWeight = 1;
            $scope.budget = 500;
            $scope.remainingBudget = $scope.budget;
            $scope.realizedValue = 0;
            $scope.realizedCosts = countRealizedCosts();            
            $scope.interventions = getInterventions($scope.members);
            $scope.potentialValue = countValue();
            $scope.expectedValue;
            
            var ihaUtil;
            
            $scope.change = function() {
                changeAll();
            };
            
            $scope.numberOfGaps = countNumberOfGaps();
            
            function changeAll(){
                $scope.realizedCosts = countRealizedCosts();
                $scope.remainingBudget = $scope.budget - $scope.realizedCosts;
                $scope.interventions = getInterventions($scope.members);
                $scope.potentialValue = countValue();
                calculateIhaUtil();

            }
            
            function countRealizedCosts() {
                var costs = 0;
                var value = 0;
                _.each($scope.members, function(m) {
                    if(m.conductedInterventions){
                        _.each(m.conductedInterventions, function(i) {
                            costs += i.w;
                            if(i.state === 'successful') {
                                value += i.Value;
                            }
                        });
                    }
                });
                $scope.realizedValue = value;
                return costs;
            }
            
            function countValue() {
                var pv = 0;
                var ev = 0;
                _.each($scope.interventions, function(i) {
                    pv += i.Value;
                    ev += i.b;
                });
                $scope.expectedValue = ev;
                return pv;
            }
            
            function countNumberOfGaps() { 
                var count = 0;
                _.each($scope.members, function(m) {count += m.Gaps.length; });
                return count;
            }
            
            function calculateIhaUtil() {
                
                var data = [
        {'State': "JAN", 'planned': 0, 'successful': 0, 'unsuccessful': 0},
        {'State': "FEB", 'planned': 0, 'successful': 0, 'unsuccessful': 0},
        {'State': "MAR", 'planned': 0, 'successful': 0, 'unsuccessful': 0},
        {'State': "APR", 'planned': 0, 'successful': 0, 'unsuccessful': 0},
        {'State': "MAY", 'planned': 0, 'successful': 0, 'unsuccessful': 0},
        {'State': "JUN", 'planned': 0, 'successful': 0, 'unsuccessful': 0},
        {'State': "JUL", 'planned': 0, 'successful': 0, 'unsuccessful': 0},
        {'State': "AUG", 'planned': 0, 'successful': 0, 'unsuccessful': 0},
        {'State': "SEP", 'planned': 0, 'successful': 0, 'unsuccessful': 0},
        {'State': "OCT", 'planned': 0, 'successful': 0, 'unsuccessful': 0},
        {'State': "NOV", 'planned': 0, 'successful': 0, 'unsuccessful': 0},        
        {'State': "DEC", 'planned': 0, 'successful': 0, 'unsuccessful': 0}];
        var data1 = [
        {'State': "JAN", 'planned': 0, 'successful': 0, 'unsuccessful': 0},
        {'State': "FEB", 'planned': 0, 'successful': 0, 'unsuccessful': 0},
        {'State': "MAR", 'planned': 0, 'successful': 0, 'unsuccessful': 0},
        {'State': "APR", 'planned': 0, 'successful': 0, 'unsuccessful': 0},
        {'State': "MAY", 'planned': 0, 'successful': 0, 'unsuccessful': 0},
        {'State': "JUN", 'planned': 0, 'successful': 0, 'unsuccessful': 0},
        {'State': "JUL", 'planned': 0, 'successful': 0, 'unsuccessful': 0},
        {'State': "AUG", 'planned': 0, 'successful': 0, 'unsuccessful': 0},
        {'State': "SEP", 'planned': 0, 'successful': 0, 'unsuccessful': 0},
        {'State': "OCT", 'planned': 0, 'successful': 0, 'unsuccessful': 0},
        {'State': "NOV", 'planned': 0, 'successful': 0, 'unsuccessful': 0},        
        {'State': "DEC", 'planned': 0, 'successful': 0, 'unsuccessful': 0}];
        
        var data2 = [
        {'State': "JAN", 'planned': 0, 'successful': 0, 'unsuccessful': 0},
        {'State': "FEB", 'planned': 0, 'successful': 0, 'unsuccessful': 0},
        {'State': "MAR", 'planned': 0, 'successful': 0, 'unsuccessful': 0},
        {'State': "APR", 'planned': 0, 'successful': 0, 'unsuccessful': 0},
        {'State': "MAY", 'planned': 0, 'successful': 0, 'unsuccessful': 0},
        {'State': "JUN", 'planned': 0, 'successful': 0, 'unsuccessful': 0},
        {'State': "JUL", 'planned': 0, 'successful': 0, 'unsuccessful': 0},
        {'State': "AUG", 'planned': 0, 'successful': 0, 'unsuccessful': 0},
        {'State': "SEP", 'planned': 0, 'successful': 0, 'unsuccessful': 0},
        {'State': "OCT", 'planned': 0, 'successful': 0, 'unsuccessful': 0},
        {'State': "NOV", 'planned': 0, 'successful': 0, 'unsuccessful': 0},        
        {'State': "DEC", 'planned': 0, 'successful': 0, 'unsuccessful': 0}];
                
                
                _.each(_.filter($scope.interventions, function(i) { return i.Name === 'IHA'; }), function(i) {
                    var begin = i.Start.getMonth();
                    var end = i.End.getMonth();
                    var lowest = _.min(data.slice(begin, end+1), function(o) { return o.planned; });
                    lowest.planned +=1;
                });
                _.each($scope.members, function(m) {
                    
                    _.each(_.filter(m.conductedInterventions , function(i) { return i.Name === 'IHA'; }), function(i) {
                        var begin = i.Start.getMonth();
                        var end = i.End.getMonth();
                        var lowest = _.min(data.slice(begin, end+1), function(o) { 
                            return o.successful + o.unsuccessful + o.planned; 
                        });
                        if(i.state ==='successful'){
                            lowest.successful +=1;
                        } else if(i.state ==='unsuccessful'){ 
                            lowest.unsuccessful +=1;
                        }
                    });  
                });
                
                _.each(_.filter($scope.interventions, function(i) { return i.Name === 'MEOM'; }), function(i) {
                    var begin = i.Start.getMonth();
                    var end = i.End.getMonth();
                    var lowest = _.min(data2.slice(begin, end+1), function(o) { return o.planned; });
                    lowest.planned +=1;
                });
                _.each($scope.members, function(m) {
                    
                    _.each(_.filter(m.conductedInterventions , function(i) { return i.Name === 'MEOM'; }), function(i) {
                        var begin = i.Start.getMonth();
                        var end = i.End.getMonth();
                        var lowest = _.min(data2.slice(begin, end+1), function(o) { 
                            return o.successful + o.unsuccessful + o.planned; 
                        });
                        if(i.state ==='successful'){
                            lowest.successful +=1;
                        } else if(i.state ==='unsuccessful'){ 
                            lowest.unsuccessful +=1;
                        }
                    });  
                });
                
                _.each(_.filter($scope.interventions, function(i) { return i.Name === 'MEOT'; }), function(i) {
                    var begin = i.Start.getMonth();
                    var end = i.End.getMonth();
                    var lowest = _.min(data1.slice(begin, end+1), function(o) { return o.planned; });
                    lowest.planned +=1;
                });
                _.each($scope.members, function(m) {
                    
                    _.each(_.filter(m.conductedInterventions , function(i) { return i.Name === 'MEOT'; }), function(i) {
                        var begin = i.Start.getMonth();
                        var end = i.End.getMonth();
                        var lowest = _.min(data1.slice(begin, end+1), function(o) { 
                            return o.successful + o.unsuccessful + o.planned; 
                        });
                        if(i.state ==='successful'){
                            lowest.successful +=1;
                        } else if(i.state ==='unsuccessful'){ 
                            lowest.unsuccessful +=1;
                        }
                    });  
                });
                
                var yMax = _.max(data.concat(data1,data2), function (o) { return o.successful + o.unsuccessful + o.planned; });
                var yMaxCount = yMax.successful + yMax.unsuccessful + yMax.planned;
                stackedBarChart("#iha", data, yMaxCount);
                stackedBarChart("#meot", data1, yMaxCount);
                stackedBarChart("#meom", data2, yMaxCount);
            }
                       
            
            $scope.simulateSuccessful = function(i) {
                i.state = 'successful';
                _.each(i.interventionGaps, function(x) { x.state = 'closed'; });
                if(!i.Member.conductedInterventions){
                    i.Member.conductedInterventions = [];
                }
                i.Member.conductedInterventions.push(i);
                changeAll();
            };
            
            $scope.simulateUnsuccessful = function(i) {
                i.state = 'unsuccessful';
                _.each(i.interventionGaps, function(x) { x.state = 'closed'; });
                if(!i.Member.conductedInterventions){
                    i.Member.conductedInterventions = [];
                }
                i.Member.conductedInterventions.push(i);
                changeAll();
            };

            function getInterventions(members) {
                var interventions = [];
                _.each(members, function(member) {
                    var iteratedGaps = [];
                    _.each(member.Gaps, function(gap) {
                        if(gap.state !== 'open') {
                            return;
                        }
                        
                        // find overlapping gaps
                        var overlappingGaps = _.filter(member.Gaps, function(g){ return gap !== g && ((g.Start <= gap.End) && (g.End >= gap.Start)) && !_.contains(iteratedGaps,g); });
                        
                        var mInterventions = mergeInterventions(gap, overlappingGaps);
                        _.each(mInterventions, function(x) { 
                            x.Member = member;
                            interventions.push(x);
                        });
                        iteratedGaps.push(gap);
                    });
                });
                var b = 0;
                if($scope.remainingBudget > 0) {
                    b = $scope.remainingBudget;
                }
                var optimizedInterventions = knapsack(interventions, b); 
                return _.sortBy(optimizedInterventions.set, function (i) { return i.r; }).reverse();
        }
    
    function mergeInterventions(origGap, overlappingGaps) {
        var interventions = [];
        _.each(origGap.GapInterventionTypes, function(interventionType) {  
            var gapsWithSameInterventionType = gapsWithSameIntervetionType(overlappingGaps, interventionType.Name);
            var benefit = interventionType.SuccessProbability * origGap.Value * $scope[interventionType.Name.toLowerCase() + 'Weight'];
            var weight = interventionType.Cost; // does cost increase with additinal gaps?
            var value = origGap.Value;
            var start = origGap.Start;
            var end = origGap.End;
            var interventionGaps = [origGap];
            var r = benefit - weight;
                
            _.each(gapsWithSameInterventionType, function(sgap) { 
                var iType = _.findWhere(sgap.GapInterventionTypes, { Name: interventionType.Name });
                if(iType) {
                    var addBenefit = iType.SuccessProbability * sgap.Value;
                    benefit += addBenefit;
                    r += addBenefit * $scope[iType.Name.toLowerCase() + 'Weight'];
                    value += sgap.Value;
                    if(sgap.Start > start){
                        start = sgap.Start;
                    }
                    if(sgap.End < end){
                        end = sgap.End;
                    }
                    interventionGaps.push(sgap);
                }
            });
            if(r > 0){
                interventions.push({Name: interventionType.Name, Start: start, End: end, b: r, w: weight, Value: value, r: r, interventionGaps: interventionGaps });
            }
        });
        return interventions;
    };
    
    function gapsWithSameIntervetionType(gaps, interventionTypeName) {
        var gapsWithSameInterventionType = [];
        _.each(gaps, function(gap){
            if(_.contains(_.pluck(gap.GapInterventionTypes, 'Name'), interventionTypeName)) {
                gapsWithSameInterventionType.push(gap);
            }
        });
        return gapsWithSameInterventionType;
    };
            
            
            
		});
        
  
    
    }());