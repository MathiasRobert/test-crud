import { Button, CardHeader, Grid, Typography } from "@material-ui/core";
import { Cancel, Edit, Save } from "@material-ui/icons";
import * as React from "react";

interface Props {
  isEditing: boolean;
  onEdit: () => void;
  onCancel: () => void;
  isSubmitting: boolean;
}

function ProductCardHeader({
  onEdit,
  isEditing,
  isSubmitting,
  onCancel,
}: Props) {
  return (
    <CardHeader
      subheader={
        <React.Fragment>
          <Grid container justify="space-between">
            <Grid item>
              <Typography variant="body1" color="primary">
                Product informations
              </Typography>
            </Grid>
            <Grid item>
              {isSubmitting && <>...Chargement</>}
              {!isSubmitting && !isEditing && (
                <React.Fragment>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    onClick={() => onEdit()}
                    startIcon={<Edit />}
                  >
                    Edit
                  </Button>
                </React.Fragment>
              )}
              {!isSubmitting && isEditing && (
                <React.Fragment>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    type="submit"
                    startIcon={<Save />}
                  >
                    Save
                  </Button>
                  <Button
                    variant="outlined"
                    color="default"
                    size="small"
                    type="button"
                    onClick={() => onCancel()}
                    style={{ marginLeft: "10px" }}
                    startIcon={<Cancel />}
                  >
                    Cancel
                  </Button>
                </React.Fragment>
              )}
            </Grid>
          </Grid>
        </React.Fragment>
      }
    />
  );
}
export default ProductCardHeader;
